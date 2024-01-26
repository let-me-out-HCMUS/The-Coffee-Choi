const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const productAtributeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
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
  status: {
    type: Boolean,
    default: true,
  },
});

productAtributeSchema.plugin(URLSlugs("name", { field: "slug" }));

const ProductAttribute = mongoose.model(
  "ProductAttribute",
  productAtributeSchema
);
module.exports = ProductAttribute;
