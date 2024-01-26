const mongoose = require("mongoose");

const paymentAccountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Payment account must belong to a user!"],
  },
  balance: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const PaymentAccount = mongoose.model("PaymentAccount", paymentAccountSchema);

module.exports = PaymentAccount;
