const Product = require("../models/Product");
const Category = require("../models/Category");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  // TODO: add filter, sort, limit, pagination
  const feature = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limit()
    .paginate();
  const products = await feature.query;
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

// Get product by ID
exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate({
    path: "category",
    select: "name -_id",
  });
  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

// Get product by slug
exports.getProductBySlug = catchAsync(async (req, res, next) => {
  const product = await Product.findOne({ slug: req.params.slug }).populate({
    path: "category",
    select: "name -_id",
  });
  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

// Delete product
exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  // Update status to false
  product.status = false;
  product.save();
  res.status(204).json({
    status: "success",
    data: null,
  });
});

// Create product
exports.createProduct = catchAsync(async (req, res, next) => {
  const category = await Category.findOne({ name: req.body.category });
  if (!category) {
    return next(new AppError("No category found with that ID", 404));
  }
  req.body.category = category._id;
  const product = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
});
