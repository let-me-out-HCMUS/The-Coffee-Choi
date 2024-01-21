const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
