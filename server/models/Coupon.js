const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
    minlength: 6,
    maxlength: 12,
  },
  discountValue: {
    type: Number,
    required: true,
  },
  couponDescription: {
    type: String,
    required: true,
  },
  timeUsed: {
    type: Number,
    default: 0,
  },
  maxLimit: {
    type: Number,
    required: true,
  },
});
const Coupon = mongoose.model("Coupon", couponSchema);
module.exports = Coupon;
