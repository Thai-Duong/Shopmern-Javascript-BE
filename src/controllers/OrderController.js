const OrderModel = require("../model/OrderModel");

const createOrder = async (req, res) => {
  const { name, email, address, phone, totalAmount, cart } = req.body;
  try {
    const data = await OrderModel.create({
      cart,
      name,
      email,
      address,
      phone,
      totalAmount,
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

module.exports = {
  createOrder,
  getOrder,
  detailOrder,
};
