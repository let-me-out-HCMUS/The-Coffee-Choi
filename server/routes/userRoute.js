const express = require("express");
const passport = require("passport");

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
    const token = authController.signToken(req.user);
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
    const token = authController.signToken(req.user);
    res.redirect(`http://localhost:3000/login-success/${token}`);
  }
);

module.exports = userRouter;
