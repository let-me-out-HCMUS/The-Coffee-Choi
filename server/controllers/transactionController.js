const Transaction = require("../models/Transaction");
const PaymentAccount = require("../models/PaymentAccount");
const catchAsync = require("../utils/catchAsync");
const Order = require("../models/Order");

exports.getAllTransactions = catchAsync(async (req, res, next) => {
  const transactions = await Transaction.find();
  res.status(200).json({
    status: "success",
    data: {
      transactions,
    },
  });
});

exports.getTransaction = catchAsync(async (req, res, next) => {
  const transaction = await Transaction.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      transaction,
    },
  });
});

exports.createTransaction = catchAsync(async (req, res, next) => {
  const { paymentAccount, orderId } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(404).json({
      status: "fail",
      message: "Order not found!",
    });
  }

  const payment = await PaymentAccount.findById(paymentAccount);
  if (!payment) {
    return res.status(404).json({
      status: "fail",
      message: "Payment account not found!",
    });
  }

  const transaction = await Transaction.create({
    paymentAccount: payment.id,
    orderId: order.id,
    totalMoney: order.totalMoney,
  });

  res.status(201).json({
    status: "success",
    data: {
      transaction,
    },
  });
});
