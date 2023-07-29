const express = require("express");
const ProductModel = require("../model/ProductModel");
const UserModel = require("../model/UserModel");
const router = express.Router();
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");
const OrderController = require("../controllers/OrderController");

const initWebRouter = (app) => {
  //User
  router.post("/users/register", UserController.createUser);
  router.post("/users/login", UserController.loginUser);
  router.get("/users/getAll", UserController.getUser);
  router.delete("/users/delete/:id", UserController.deleteUser);
  router.put("/users/update/:id", UserController.updateUser);
  router.get("/users/detail/:id", UserController.detailUser);

  //Product
  router.post("/products/create", ProductController.createProduct);
  router.get("/products/getAll", ProductController.getAllProduct);
  router.delete("/products/delete/:id", ProductController.deleteProduct);
  router.put("/products/update/:id", ProductController.updateProduct);

  //order
  router.post("/order", OrderController.createOrder);
  router.get("/order/getAll", OrderController.getOrder);
  router.get("/order/detail/:id", OrderController.detailOrder);
  router.put("/order/update/:id", OrderController.updateOrder);

  return app.use("/", router);
};
module.exports = initWebRouter;
