const express = require("express");

const router = express.Router();

const paymentAccountController = require("../controllers/paymentAccountController");

const authController = require("../controllers/authController");

router.get(
  "/",
  authController.protect,
  paymentAccountController.getAllPaymentAccounts
);

router.get("/user/:id", paymentAccountController.getPaymentAccountByUserId);

router.post("/", paymentAccountController.createPaymentAccount);

router.patch("/:id", paymentAccountController.updatePaymentAccount);

router.delete(
  "/:id",
  authController.protect,
  paymentAccountController.deletePaymentAccount
);

module.exports = router;
