const express = require("express");
const transactionController = require("../controllers/transactionController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post(
  "/",
  authController.protect,
  transactionController.createTransaction
);

router.get(
  "/",
  authController.protect,
  transactionController.getAllTransactions
);

router.get(
  "/:id",
  authController.protect,
  transactionController.getTransaction
);

module.exports = router;
