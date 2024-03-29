const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

categorySchema.plugin(URLSlugs("name", { field: "slug" }));

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
