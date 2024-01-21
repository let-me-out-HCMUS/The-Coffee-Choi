const Cart = require("../models/Cart");
const Product = require("../models/Product");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Create default cart
const createDefaultCart = async (userId) => {
  const newCart = await Cart.create({
    userId,
    products: [],
  });
  return newCart;
};

// Get cart by user ID
const getCartByUID = async (id) => {
  const cart = await Cart.findOne({ userId: id, status: "pending" });
  if (!cart) {
    return await createDefaultCart(id);
  }
  return cart;
};

// Add product to cart
exports.addToCart = catchAsync(async (req, res, next) => {
  const { productId } = req.body;
  const cart = await getCartByUID(req.user._id);
  const product = await Product.findById(productId);
  if (!product) {
    return next(new AppError("Product not found", 404));
  }
  // Find index of product in cart
  const itemIndex = cart.products.findIndex((p) => p.productId == productId);
  // Check if product exists in cart
  if (itemIndex > -1) {
    // If exists, increase quantity
    let quantity = req.body.quantity ? req.body.quantity : 1;
    cart.products[itemIndex].quantity += quantity;
  } else {
    cart.products.push({
      productId,
      quantity: req.body.quantity ? req.body.quantity : 1,
    });
  }
  await cart.save();
  return res.status(201).json(cart);
});

// Get cart by user ID
exports.getCart = catchAsync(async (req, res, next) => {
  const cart = await getCartByUID(req.user._id);
  if (!cart) {
    return next(new AppError("Cart not found", 404));
  }
  res.status(200).json(cart);
});

// Update quantity of product in cart
exports.updateQuantity = catchAsync(async (req, res, next) => {
  const { productId, quantity } = req.body;
  const cart = await getCartByUID(req.user._id);
  const itemIndex = cart.products.findIndex((p) => p.productId == productId);
  if (itemIndex > -1) {
    if (quantity == 0) {
      cart.products.splice(itemIndex, 1);
    } else {
      cart.products[itemIndex].quantity = quantity;
    }
  } else {
    return next(new AppError("Product not found in cart", 404));
  }
  await cart.save();
  res.status(200).json(cart);
});
