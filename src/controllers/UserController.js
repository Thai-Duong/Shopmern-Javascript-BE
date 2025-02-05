const UserModel = require("../model/UserModel");

const createUser = async (req, res) => {
  try {
    const { email, password, name, address, phone, isAdmin } = req.body;
    const checkUser = await UserModel.findOne({
      email: email,
    });
    if (checkUser !== null) {
      res.send({ status: "ERR", message: "Email is areadly" });
    } else {
      const data = await UserModel.create({
        email,
        password,
        name,
        address,
        phone,
        isAdmin,
      });
      res.send({ message: "SUCCESS" });
    }
  } catch (error) {
    return res.status(404).json({
      message: e,
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await UserModel.findOne({
      email: email,
    });
    if (checkUser === null || password !== checkUser.password) {
      res.send({ status: "ERR", message: "Email or Password incorrent" });
    } else {
      res.send({
        status: "SUCCESS",
        message: "Login success",
        data: checkUser,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const getAllUsers = await UserModel.find();
    res.send({
      status: "SUCCESS",
      message: "GET ALL USERS SUCCESS",
      data: getAllUsers,
    });
  } catch (error) {
    return res.status(404).json({
      message: e,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = await req.params.id;
    const checkUser = await UserModel.findOne({
      _id: userId,
    });
    if (checkUser === null) {
      res.send({
        status: "ERR",
        message: "The user is not define",
      });
    }
    await UserModel.findByIdAndDelete(userId);
    res.send({
      status: "SUCCESS",
      message: "DELETE USER SUCCESS",
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    const checkUser = await UserModel.findOne({
      _id: userId,
    });
    if (checkUser === null) {
      res.send({
        status: "ERR",
        message: "The user is not define",
      });
    }
    const updateUser = await UserModel.findByIdAndUpdate(userId, data, {
      new: true,
    });
    res.send({
      status: "SUCCESS",
      message: "UPDATE USER SUCCESS",
      data: updateUser,
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const detailUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const checkUser = await UserModel.findOne({
      _id: userId,
    });
    if (checkUser === null) {
      res.send({
        status: "ERR",
        message: "The user is not define",
      });
    }
    res.send({
      status: "SUCCESS",
      message: "GET USER SUCCESS",
      data: checkUser,
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
module.exports = {
  createUser,
  loginUser,
  getUser,
  deleteUser,
  updateUser,
  detailUser,
};
