const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const axios = require("axios");

require("dotenv").config({ path: "./config.env" });
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

userRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

userRouter.get(
  "/auth/google/callback",
  (req, res, next) => {
    passport.authenticate("google", (err, profile) => {
      req.user = profile;
      console.log(req.user);
      next();
    })(req, res, next);
  },
  async (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const paymentAccount = await axios.post(
      "https://localhost:8001/api/v1/paymentAccounts",
      { user: req.user._id, balance: 0, type: "user" }
    );
    res.redirect(`http://localhost:5173/third-party?token=${token}`);
  }
);

userRouter.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["email"],
    session: false,
  })
);

userRouter.get(
  "/auth/facebook/callback",
  (req, res, next) => {
    passport.authenticate("facebook", (err, profile) => {
      req.user = profile;
      next();
    })(req, res, next);
  },
  async (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const paymentAccount = await axios.post(
      "https://localhost:8001/api/v1/paymentAccounts",
      { user: req.user._id, balance: 0, type: "user" }
    );
    res.redirect(`http://localhost:5173/third-party?token=${token}`);
  }
);

userRouter.get("/", authController.protect, authController.getUser);

userRouter.patch(
  "/update-info",
  authController.protect,
  userController.updateUserInfo
);

userRouter.patch(
  "/change-password",
  authController.protect,
  userController.changePassword
);
module.exports = userRouter;
