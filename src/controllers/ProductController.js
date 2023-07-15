const ProductModel = require("../model/ProductModel");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;
    const data = await ProductModel.create({
      name,
      price,
      category,
      description,
      image,
    });
    res.send({ status: "SUCCESS", message: "Create product", data: data });
  } catch (error) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getAllProduct = async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.send({
      status: "SUCCESS",
      message: "All product",
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: e,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productId = await req.params.id;
    const checkProduct = await ProductModel.findOne({
      _id: productId,
    });
    if (checkProduct === null) {
      res.send({
        status: "ERR",
        message: "The product is not define",
      });
    }
    await ProductModel.findByIdAndDelete(productId);
    res.send({
      status: "SUCCESS",
      message: "DELETE PRODUCT SUCCESS",
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    const checkProduct = await ProductModel.findOne({
      _id: productId,
    });
    if (checkProduct === null) {
      res.send({
        status: "ERR",
        message: "THE PRODUCT IS NOT DEFINE",
      });
    }
    const updateProduct = await ProductModel.findByIdAndUpdate(
      productId,
      data,
      {
        new: true,
      }
    );
    res.send({
      status: "SUCCESS",
      message: "UPDATE USER SUCCESS",
      data: updateProduct,
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
module.exports = {
  createProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
};
