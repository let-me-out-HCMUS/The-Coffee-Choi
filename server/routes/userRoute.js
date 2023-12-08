const express = require("express");

const userRouter = express.Router();
const authController = require("../controllers/authController");

// For testing purposes
userRouter.get(
  "/testing",
  authController.protect,
  authController.restrictTo("admin"),
  authController.getAllUsers
);
// Sign up
userRouter.post("/signup", authController.signUp);
// Login
userRouter.post("/login", authController.login);
module.exports = userRouter;
