const Category = require("../models/Category");
const catchAsync = require("../utils/catchAsync");
const Product = require("../models/Product");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

// Get all categories
exports.getAllCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    status: "success",
    results: categories.length,
    data: {
      categories,
    },
  });
});

// Create category
exports.createCategory = catchAsync(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      category,
    },
  });
});

// Delete category
exports.deleteCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return next(new AppError("No category found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

// Get product by slug
exports.getCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findOne({ slug: req.params.slug });
  if (!category) {
    return next(new AppError("No category found with that slug", 404));
  }
  const feature = new APIFeatures(
    Product.find({ category: category._id }),
    req.query
  )
    .filter()
    .sort()
    .limit()
    .paginate();

  const products = await feature.query;
  let totalPage = 1;
  let totalProduct = await Product.countDocuments({ category: category._id });
  if (req.query.page && req.query.limit) {
    totalPage = Math.ceil(totalProduct / req.query.limit);
  }
  res.status(200).json({
    status: "success",
    data: {
      category,
      products,
      totalPage,
      totalProduct,
    },
  });
});

// Update category
exports.updateCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findOne({ slug: req.params.slug });
  category.status = req.body.status ? req.body.status : category.status;
  category.name = req.body.name ? req.body.name : category.name;
  category.description = req.body.description
    ? req.body.description
    : category.description;
  category.save();
  res.status(200).json({
    status: "success",
    data: {
      category,
    },
  });
});
