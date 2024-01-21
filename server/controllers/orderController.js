const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Coupon = require("../models/Coupon");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Create order
exports.createOrder = catchAsync(async (req, res, next) => {
  const { cartId } = req.body;
  const cart = await Cart.findOne({ _id: cartId, status: "pending" });
  if (!cart) return next(new AppError("Cart not found", 404));
  const coupon = await Coupon.findOne({ code: req.body.couponUsed });
  const order = await Order.create({
    cart: cartId,
    couponUsed: coupon ? coupon._id : null,
  });
  cart.status = "served";
  await cart.save();
  res.status(201).json({
    status: "success",
    data: {
      order,
    },
  });
});

// Get order by ID
exports.getOrder = catchAsync(async (req, res, next) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId).populate("cart");
  if (!order) return next(new AppError("Order not found", 404));
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});

// Get all orders
exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find().populate("cart");
  res.status(200).json({
    status: "success",
    data: {
      orders,
    },
  });
});

// Update order
exports.updateOrder = catchAsync(async (req, res, next) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order) return next(new AppError("Order not found", 404));
  order.status = req.body.status;
  await order.save();
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});
