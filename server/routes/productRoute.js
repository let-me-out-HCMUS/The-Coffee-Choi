const productController = require("../controllers/productController");
const express = require("express");
const productRouter = express.Router();
const authController = require("../controllers/authController");

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    productController.createProduct
  );

/* productRouter
  .route("/:id")
  .get(productController.getProduct)
  .delete(productController.deleteProduct); */

productRouter
  .route("/:slug")
  .get(productController.getProductBySlug)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    productController.deleteProduct
  );

module.exports = productRouter;
