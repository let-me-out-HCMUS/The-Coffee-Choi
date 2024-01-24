const mongoose = require("mongoose");
const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  toppings: String,
  size: String,
  price: Number,
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);
module.exports = OrderItem;
