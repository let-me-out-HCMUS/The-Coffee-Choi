const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const authController = require("../controllers/authController");
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
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.redirect(`http://localhost:3000/login-success/${token}`);
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
  (req, res) => {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.redirect(`http://localhost:3000/login-success/${token}`);
  }
);

userRouter.get("/", authController.protect, authController.getUser);
module.exports = userRouter;
