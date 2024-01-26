const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  paymentAccount: {
    type: mongoose.Schema.ObjectId,
    ref: "PaymentAccount",
    required: [true, "Transaction must belong to a payment account!"],
  },
  orderId: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
    required: [true, "Transaction must belong to an order!"],
  },
  totalMoney: {
    type: Number,
    required: [true, "Transaction must have a total money!"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
