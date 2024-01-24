const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

categorySchema.plugin(URLSlugs("name", { field: "slug" }));

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
