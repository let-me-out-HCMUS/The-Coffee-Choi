const mongoose = require("mongoose");
const Coupon = require("./Coupon");
const Cart = require("./Cart");

const orderSchema = new mongoose.Schema({
  status: {
    type: String,
    default: "unpaid",
    enum: ["unpaid", "paid"],
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  couponUsed: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "Coupon",
  },
  totalMoney: {
    type: Number,
    default: 0,
  },
});

orderSchema.pre("save", async function (next) {
  // Calculate total money using coupon
  try {
    const cart = await Cart.findById(this.cart);
    const coupon = await Coupon.findById(this.couponUsed);
    if (coupon) {
      this.totalMoney =
        cart.totalMoney - (coupon.discountValue * cart.totalMoney) / 100;
      coupon.timeUsed += 1;
      await coupon.save();
    } else this.totalMoney = cart.totalMoney;
    next();
  } catch (error) {
    next(error);
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
