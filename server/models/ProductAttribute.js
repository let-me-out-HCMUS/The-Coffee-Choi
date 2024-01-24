const mongoose = require("mongoose");

const productAtributeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
    default: 0,
  },
});

const ProductAttribute = mongoose.model(
  "ProductAttribute",
  productAtributeSchema
);
module.exports = ProductAttribute;
