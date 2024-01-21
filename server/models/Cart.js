const mongoose = require("mongoose");
const Product = require("./Product");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: Number,
        status: {
          type: Boolean,
          default: true,
        },
      },
    ],
    totalMoney: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "served", "cancelled"],
    },
  },
  {
    timestamps: true,
  }
);

cartSchema.pre("save", async function (next) {
  // Calculate total money
  try {
    let totalMoney = 0;
    for (let i = 0; i < this.products.length; i++) {
      const product = await Product.findById(this.products[i].productId);
      totalMoney += product.price * this.products[i].quantity;
    }
    this.totalMoney = totalMoney;
    next();
  } catch (error) {
    next(error);
  }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
