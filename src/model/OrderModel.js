const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderModel = new Schema(
  {
    cart: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("orders", OrderModel);
