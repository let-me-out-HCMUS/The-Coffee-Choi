const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const Product = require("../models/Product");
const ProductAttribute = require("../models/ProductAttribute");
const Coupon = require("../models/Coupon");
const axios = require("axios");
// Get all orders
exports.getAllOrders = catchAsync(async (req, res, next) => {
  let orders;
  if (req.user.role == "admin") {
    orders = await Order.find().populate({
      path: "orderItems",
      populate: {
        path: "product",
        model: "Product",
        select: "name",
      },
    });
  } else {
    orders = await Order.find({ user: req.user.id }).populate({
      path: "orderItems",
      populate: {
        path: "product",
        model: "Product",
        select: "name",
      },
    });
  }

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
  /*   {
    "products":[
        {
            "id":"65b08d630b7758bc68941d60",
            "quantity":1,
            "toppings":["65b1b367e1f7c6d2175413fc","65b1b374e1f7c6d217541400"],
            "size": "65b1b357e1f7c6d2175413f8"
        },
         {
            "id":"65b08d630b7758bc68941d60",
            "quantity":1,
            "toppings":["65b1b367e1f7c6d2175413fc"],
            "size": "65b1b357e1f7c6d2175413f8"
        }
    ]
} */

  // Check for coupon
  let coupon = null;
  if (req.body.couponUsed) {
    coupon = await Coupon.findOne({ code: req.body.couponUsed });
    if (!coupon) return next(new AppError("Invalid coupon", 400));
    coupon.timeUsed++;
    await coupon.save();
  }

  // Create order items
  const orderItems = [];
  for (const productItem of req.body.products) {
    let productItemPrice = 0;

    // Find product
    const product = await Product.findById(productItem.id);
    if (!product) return next(new AppError("Invalid product", 400));
    productItemPrice += product.price * productItem.quantity;
    productItemPrice -=
      (product.discount / 100) * product.price * productItem.quantity;
    product.sold += productItem.quantity;
    await product.save();

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
    user: req.user.id,
    orderItems: orderItems.map((item) => item.id),
    couponUsed: coupon ? coupon._id : null,
    totalMoney: coupon
      ? totalMoney - (coupon.discountValue / 100) * totalMoney + 30000
      : totalMoney + 30000,
  });

  // Send order to transaction server
  const transactionServerUrl = "https://localhost:8001/api/v1/transactions";
  const transaction = await axios.post(transactionServerUrl, {
    paymentAccount: req.user.id,
    orderId: order.id,
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

// Get order by ID
exports.getOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate({
    path: "orderItems",
    populate: {
      path: "product",
      model: "Product",
      select: "name image",
    },
  });
  res.status(200).json({
    status: "success",
    data: {
      order,
    },
  });
});
