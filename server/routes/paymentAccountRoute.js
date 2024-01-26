const express = require("express");

const router = express.Router();

const paymentAccountController = require("../controllers/paymentAccountController");

router.get("/", paymentAccountController.getAllPaymentAccounts);

router.get("/:id", paymentAccountController.getPaymentAccountById);

router.post("/", paymentAccountController.createPaymentAccount);

router.patch("/:id", paymentAccountController.updatePaymentAccount);

router.delete("/:id", paymentAccountController.deletePaymentAccount);

module.exports = router;
