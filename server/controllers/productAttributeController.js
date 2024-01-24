const ProductAttribute = require("../models/ProductAttribute");
const Category = require("../models/Category");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// Get all product attributes
exports.getAllProductAttributes = catchAsync(async (req, res, next) => {
  const productAttributes = await ProductAttribute.find();
  res.status(200).json({
    status: "success",
    results: productAttributes.length,
    data: {
      productAttributes,
    },
  });
});

// Get by category
exports.getProductAttributeByCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findOne({ name: req.params.category });
  if (!category) {
    return next(new AppError("No category found with that ID", 404));
  }
  const productAttributes = await ProductAttribute.find({
    category: category._id,
  });
  res.status(200).json({
    status: "success",
    results: productAttributes.length,
    data: {
      productAttributes,
    },
  });
});

// Get product attribute by ID
exports.getProductAttribute = catchAsync(async (req, res, next) => {
  const productAttribute = await ProductAttribute.findById(req.params.id);
  if (!productAttribute) {
    return next(new AppError("No product attribute found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      productAttribute,
    },
  });
});

// Delete product attribute
exports.deleteProductAttribute = catchAsync(async (req, res, next) => {
  const productAttribute = await ProductAttribute.findByIdAndDelete(
    req.params.id
  );

  res.status(204).json({
    status: "success",
    data: null,
  });
});
