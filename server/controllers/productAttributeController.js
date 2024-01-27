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
  const category = await Category.findOne({
    slug: req.params.slug,
    status: true,
  });
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

// Create product attribute
exports.createProductAttribute = catchAsync(async (req, res, next) => {
  const category = await Category.findOne({ name: req.body.category });
  if (!category) {
    return next(new AppError("No category found with that name", 404));
  }
  const productAttribute = await ProductAttribute.create({
    name: req.body.name,
    category: category._id,
    price: req.body.price,
  });
  res.status(201).json({
    status: "success",
    data: {
      productAttribute,
    },
  });
});

// Delete product attribute
exports.deleteProductAttribute = catchAsync(async (req, res, next) => {
  // Update status to false
  const productAttribute = await ProductAttribute.findByIdAndUpdate(
    req.params.id,
    { status: false },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(204).json({
    status: "success",
    data: null,
  });
});

// Update product attribute
exports.updateProductAttribute = catchAsync(async (req, res, next) => {
  const productAttribute = await ProductAttribute.findOne({
    slug: req.params.slug,
  });

  if (!productAttribute) {
    return next(new AppError("No product attribute found with that ID", 404));
  }
  productAttribute.name = req.body.name ? req.body.name : productAttribute.name;
  productAttribute.price = req.body.price;
  productAttribute.save();
  res.status(200).json({
    status: "success",
    data: {
      productAttribute,
    },
  });
});
