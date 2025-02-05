const OrderModel = require("../model/OrderModel");

const createOrder = async (req, res) => {
  const {
    cart,
    name,
    address,
    phone,
    totalAmount,
    user,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = req.body;
  try {
    const data = await OrderModel.create({
      cart,
      name,
      address,
      phone,
      totalAmount,
      user,
      isPaid,
      paidAt,
      isDelivered,
      deliveredAt,
    });
    res.send({
      status: "SUCCESS",
      message: "Create order success",
      data: data,
    });
  } catch (error) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getOrder = async (req, res) => {
  try {
    const order = await OrderModel.find();
    res.send({
      status: "SUCCESS",
      message: "All Order",
      data: order,
    });
  } catch (error) {
    return res.status(404).json({
      message: e,
    });
  }
};
const detailOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    const checkProduct = await OrderModel.findOne({
      _id: orderId,
    });
    if (checkProduct === null) {
      res.send({
        status: "ERR",
        message: "The order is not define",
      });
    }
    res.send({
      status: "SUCCESS",
      message: "GET ODERD SUCCESS",
      data: checkProduct,
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const data = req.body;
    const checkOrder = await OrderModel.findOne({
      _id: orderId,
    });
    if (checkOrder === null) {
      res.send({
        status: "ERR",
        message: "THE ORDER IS NOT DEFINE",
      });
    }
    const updateOrder = await OrderModel.findByIdAndUpdate(orderId, data, {
      new: true,
    });
    res.send({
      status: "SUCCESS",
      message: "UPDATE ORDER SUCCESS",
      data: updateOrder,
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getUserOrders = async (req, res) => {
  const userId = req.params.id; // Lấy userId từ URL params
  console.log(userId);
  try {
    const orders = await OrderModel.find({ user: userId }).sort({
      createdAt: -1,
    });

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        status: "ERR",
        message: "No orders found for this user",
      });
    }

    res.status(200).json({
      status: "SUCCESS",
      message: "User orders retrieved successfully",
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      status: "ERROR",
      message: error.message,
    });
  }
};
module.exports = {
  createOrder,
  getOrder,
  detailOrder,
  updateOrder,
  getUserOrders,
};
