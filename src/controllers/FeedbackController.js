const FeedbackModel = require("../model/FeedbackModel");

const getAllFeedback = async (req, res) => {
  const productId = await req.params.id;
  try {
    const data = await FeedbackModel.find({ productId: productId });
    res.send({
      status: "SUCCESS",
      message: "All Fedback",
      data: data,
    });
  } catch (error) {
    return res.status(404).json({
      error: "Invalid data",
    });
  }
};
// Thêm một đánh giá mới
const createFeedback = async (req, res) => {
  const { productName, userName, rating, comment, userId } = req.body;
  try {
    const data = await FeedbackModel.create({
      productName,
      userId,
      userName,
      rating,
      comment,
    });
    res.send({
      status: "SUCCESS",
      message: "Create feedback success",
      data: data,
    });
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};
const getFeedbackByUserId = async (req, res) => {
  const userId = req.params.id;
  try {
    const feedbacks = await FeedbackModel.find({ userId });

    if (!feedbacks.length) {
      return res.status(404).json({
        status: "FAIL",
        message: "Không tìm thấy đánh giá nào",
      });
    }

    res.status(200).json({
      status: "SUCCESS",
      message: `Tất cả đánh giá của userId: ${userId}`,
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: "Lỗi khi lấy dữ liệu",
      error: error.message,
    });
  }
};

const getFeedBack = async (req, res) => {
  try {
    const feedback = await FeedbackModel.find();
    res.send({
      status: "SUCCESS",
      message: "All Feedbacks were successfully",
      data: feedback,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message, // Sửa từ `e` thành `error.message`
    });
  }
};

module.exports = {
  createFeedback,
  getAllFeedback,
  getFeedbackByUserId,
  getFeedBack,
};
