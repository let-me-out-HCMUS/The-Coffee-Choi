const Coupon = require("../models/Coupon");
const catchAsync = require("../utils/catchAsync");

// Get all coupons
exports.getAllCoupons = catchAsync(async (req, res, next) => {
  const coupons = await Coupon.find();
  res.status(200).json({
    status: "success",
    results: coupons.length,
    data: {
      coupons,
    },
  });
});

// Create coupon
exports.createCoupon = catchAsync(async (req, res, next) => {
  const newCoupon = await Coupon.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      coupon: newCoupon,
    },
  });
});

// Get coupon by ID
exports.getCoupon = catchAsync(async (req, res, next) => {
  const coupon = await Coupon.findOne({ code: req.params.couponId });
  res.status(200).json({
    status: "success",
    data: {
      coupon,
    },
  });
});

// Delete coupon
exports.deleteCoupon = catchAsync(async (req, res, next) => {
  await Coupon.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

// Update coupon
exports.updateCoupon = catchAsync(async (req, res, next) => {
  await Coupon.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    status: "success",
    data: null,
  });
});
