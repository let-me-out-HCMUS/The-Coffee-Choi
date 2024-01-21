const express = require("express");
const cartController = require("../controllers/cartController");
const authController = require("../controllers/authController");

const router = express.Router();
router
  .route("/")
  .get(authController.protect, cartController.getCart)
  .post(authController.protect, cartController.addToCart)
  .patch(authController.protect, cartController.updateQuantity);

module.exports = router;
