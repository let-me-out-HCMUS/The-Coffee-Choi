const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(orderController.getAllOrders)
  .post(authController.protect, orderController.createOrder);
router.route("/:orderId").get(orderController.getOrder);
router.route("/:orderId").patch(orderController.updateOrder);

module.exports = router;
