const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackModel = new Schema({
  productName: { type: String, required: true },
  userName: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("feedbacks", FeedbackModel);
