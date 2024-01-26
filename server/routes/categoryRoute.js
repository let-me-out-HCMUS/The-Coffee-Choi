const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const authController = require("../controllers/authController");

categoryRouter
  .route("/")
  .get(categoryController.getAllCategories)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    categoryController.createCategory
  );

categoryRouter.route("/:slug").get(categoryController.getCategory);

module.exports = categoryRouter;
