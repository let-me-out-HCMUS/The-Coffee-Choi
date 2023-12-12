const productController = require("../controllers/productController");
const express = require("express");
const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

productRouter
  .route("/:id")
  .get(productController.getProduct)
  .delete(productController.deleteProduct);

module.exports = productRouter;
