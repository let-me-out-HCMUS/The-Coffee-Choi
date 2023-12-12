const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

categoryRouter
  .route("/")
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

module.exports = categoryRouter;
