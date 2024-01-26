const express = require("express");
const couponController = require("../controllers/couponController");
const authController = require("../controllers/authController");

const router = express.Router();
router.route("/").get(couponController.getAllCoupons);
router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    couponController.createCoupon
  );
router
  .route("/:couponId")
  .get(couponController.getCoupon)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    couponController.deleteCoupon
  );

module.exports = router;
