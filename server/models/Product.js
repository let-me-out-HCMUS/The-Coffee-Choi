const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const productSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  image: String,
  discount: {
    type: String,
    min: [0, "Discount must bigger than 0"],
    max: [100, "Discount must smaller than 100"],
  },
  sold: {
    type: Number,
    default: 0,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

productSchema.plugin(URLSlugs("name", { field: "slug" }));

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
