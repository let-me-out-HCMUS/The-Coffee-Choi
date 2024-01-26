const express = require("express");
const router = express.Router();
const ProductAttributeController = require("../controllers/productAttributeController");
const authController = require("../controllers/authController");

router
  .route("/")
  .get(ProductAttributeController.getAllProductAttributes)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    ProductAttributeController.createProductAttribute
  );

router
  .route("/:slug")
  .get(ProductAttributeController.getProductAttributeByCategory)
  .delete(
    authController.protect,
    authController.restrictTo("admin, user"),
    ProductAttributeController.deleteProductAttribute
  );

module.exports = router;
