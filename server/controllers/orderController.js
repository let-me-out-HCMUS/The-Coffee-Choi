const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const Product = require("../models/Product");
const ProductAttribute = require("../models/ProductAttribute");
const Coupon = require("../models/Coupon");

// Get all orders
exports.getAllOrders = catchAsync(async (req, res, next) => {
  const orders = await Order.find().populate({
    path: "orderItems",
    populate: {
      path: "product",
      model: "Product",
      select: "name",
    },
  });
  res.status(200).json({
    status: "success",
    results: orders.length,
    data: {
      orders,
    },
  });
});

// Get order by ID
exports.getAllOrdersByUserId = catchAsync(async (req, res, next) => {
  const orders = await Order.find({ user: req.params.id }).populate({
    path: "OrderItem",
    populate: {
      path: "product",
      model: "Product",
      select: "name",
    },
    select: "quantity",
    select: "price",
  });
  res.status(200).json({
    status: "success",
    results: orders.length,
    data: {
      orders,
    },
  });
});

// Create order
exports.createOrder = catchAsync(async (req, res, next) => {
  // Example request body:
  // {
  //   "products": [
  //     {
  //       "id": "5f8d0e8e2f4b7e2e4c5f2c9e",
  //       "quantity": 1,
  //       "toppings": [
  //        "5f8d0e8e2f4b7e2e4c5f2c9e",
  //        "5f8d0e8e2f4b7e2e4c5f2c9e"
  //        ],
  //       "size": "5f8d0e8e2f4b7e2e4c5f2c9e"
  //     },
  //      {
  //       "id": "5f8d0e8e2f4b7e2e4c5f2c9e",
  //       "quantity": 1,
  //       "toppings": [
  //        "5f8d0e8e2f4b7e2e4c5f2c9e",
  //        "5f8d0e8e2f4b7e2e4c5f2c9e"
  //        ],
  //       "size": "5f8d0e8e2f4b7e2e4c5f2c9e"
  //     },
  //   ],
  //   "couponUsed": "DAYLACODE"
  // }

  // Check for coupon
  let coupon = null;
  if (req.body.couponUsed) {
    coupon = await Coupon.findById(req.body.couponUsed);
    if (!coupon) return next(new AppError("Invalid coupon", 400));
  }

  // Create order items
  const orderItems = [];
  for (const productItem of req.body.products) {
    let productItemPrice = 0;

    // Find product
    const product = await Product.findById(productItem.id);
    if (!product) return next(new AppError("Invalid product", 400));
    productItemPrice += product.price * productItem.quantity;

    // Topping
    const toppingString = [];
    console.log(productItem.toppings);
    if (productItem.toppings) {
      // Find topping
      for (const toppingItem of productItem.toppings) {
        const topping = await ProductAttribute.findById(toppingItem);
        if (!topping) return next(new AppError("Invalid topping", 400));
        productItemPrice += topping.price;
        toppingString.push(topping.name);
      }
    }

    // Size
    let sizeChar = "";
    const size = await ProductAttribute.findById(productItem.size);
    if (!size) return next(new AppError("Invalid size", 400));
    productItemPrice += size.price;
    sizeChar = size.name;

    // Create order item
    const orderItem = await OrderItem.create({
      product: productItem.id,
      quantity: productItem.quantity,
      toppings: toppingString.join(", "),
      size: sizeChar,
      price: productItemPrice,
    });
    orderItems.push(orderItem);
  }

  // Create order
  let totalMoney = orderItems.reduce((a, b) => a + b.price, 0);
  const order = await Order.create({
    user: "65729b8c8962f81182fb5bc3",
    orderItems: orderItems.map((item) => item.id),
    couponUsed: coupon ? coupon._id : null,
    totalMoney: coupon
      ? totalMoney - coupon.discountValue * totalMoney
      : totalMoney,
  });

  res.status(201).json({
    status: "success",
    data: {
      order,
    },
  });
});

// Update status
exports.updateStatus = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});
