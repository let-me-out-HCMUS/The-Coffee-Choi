const Product = require("../models/Product");

const catchAsync = require("../utils/catchAsync");
exports.getAllProducts = catchAsync(async (req, res, next) => {
  // TODO: add filter, sort, limit, pagination
  const products = await Product.find();
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});
exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
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
exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
});
