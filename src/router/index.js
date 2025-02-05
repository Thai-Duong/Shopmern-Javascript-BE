const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");
const OrderController = require("../controllers/OrderController");
const FeedbackController = require("../controllers/FeedbackController");

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
  router.get("/products/search", ProductController.searchProduct);

  //order
  router.post("/order", OrderController.createOrder);
  router.get("/order/getAll", OrderController.getOrder);
  router.get("/order/detail/:id", OrderController.detailOrder);
  router.put("/order/update/:id", OrderController.updateOrder);
  router.get("/order/user/:id", OrderController.getUserOrders);

  //feedback
  router.post("/feedback", FeedbackController.createFeedback);
  router.get("/feedback/:id", FeedbackController.getAllFeedback);
  router.get("/feedback/user/:id", FeedbackController.getFeedbackByUserId);
  router.get("/feedback/getAll", FeedbackController.getFeedBack);

  return app.use("/", router);
};
module.exports = initWebRouter;
