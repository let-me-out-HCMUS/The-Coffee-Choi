const express = require("express");
const router = express.Router();
const ProductAttributeController = require("../controllers/productAttributeController");

router
  .route("/")
  .get(ProductAttributeController.getAllProductAttributes)
  .post(ProductAttributeController.createProductAttribute);

router
  .route("/:slug")
  .get(ProductAttributeController.getProductAttributeByCategory);

module.exports = router;
