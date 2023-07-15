const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserModel = new Schema(
  {
    email: { type: String, require: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", UserModel);
