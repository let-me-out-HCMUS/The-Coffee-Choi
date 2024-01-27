const Transaction = require("../models/Transaction");
const PaymentAccount = require("../models/PaymentAccount");
const catchAsync = require("../utils/catchAsync");
const Order = require("../models/Order");
const mongoose = require("mongoose");
const paymentAccount = require("../models/PaymentAccount");
// Get all transactions, if user is admin, get all transactions, else get transactions of user
exports.getAllTransactions = catchAsync(async (req, res, next) => {
  let transactions;
  if (req.user.roles == "admin") {
    transactions = await Transaction.find();
  } else {
    const paymentAccount = await PaymentAccount.findOne({ user: req.user._id });
    transactions = await Transaction.find({
      paymentAccount: paymentAccount._id,
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      transactions,
    },
  });
});

// Get transaction by ID
exports.getTransaction = catchAsync(async (req, res, next) => {
  const transaction = await Transaction.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      transaction,
    },
  });
});

// Create transaction
exports.createTransaction = catchAsync(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { paymentAccount, orderId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        status: "fail",
        message: "Order not found!",
      });
    }

    const payment = await PaymentAccount.findOne({ user: paymentAccount });
    if (!payment) {
      return res.status(404).json({
        status: "fail",
        message: "Payment account not found!",
      });
    }

    // Update balance
    if (payment.balance < order.totalMoney) {
      return res.status(400).json({
        status: "fail",
        message: "Not enough money!",
      });
    }
    payment.balance -= order.totalMoney;
    payment.save();

    const adminAccount = await PaymentAccount.findOne({ type: "admin" });
    adminAccount.balance += order.totalMoney;
    adminAccount.save();

    // Update order status
    order.status = "Completed";
    order.save();

    // Create transaction
    const transaction = await Transaction.create({
      paymentAccount: payment.id,
      orderId: order.id,
      totalMoney: order.totalMoney,
    });

    await session.commitTransaction();

    res.status(201).json({
      status: "success",
      data: {
        transaction,
      },
    });
  } catch (err) {
    await session.abortTransaction();
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    session.endSession();
  }
});
