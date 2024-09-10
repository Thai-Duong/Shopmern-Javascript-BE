const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductModel = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    author: { type: String },
    supplier: { type: String },
    publisher: { type: String },
    page: { type: Number },
    language: { type: String },
    yearPublish: { type: Date },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("products", ProductModel);
