const Transaction = require("../models/Transaction");
const PaymentAccount = require("../models/PaymentAccount");
const catchAsync = require("../utils/catchAsync");
const Order = require("../models/Order");

exports.getTransaction = catchAsync(async (req, res, next) => {});

exports.createTransaction = catchAsync(async (req, res, next) => {
  const { paymentAccount, orderId, totalMoney } = req.body;

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
    totalMoney,
  });

  res.status(201).json({
    status: "success",
    data: {
      transaction,
    },
  });
});
