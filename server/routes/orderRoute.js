const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "user"),
    orderController.getAllOrders
  )
  .post(
    authController.protect,
    authController.restrictTo("admin", "user"),
    orderController.createOrder
  );

router
  .route("/:id")
  .get(orderController.getOrder)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    orderController.updateStatus
  );

module.exports = router;
