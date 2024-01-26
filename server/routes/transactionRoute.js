const express = require("express");
const transactionController = require("../controllers/transactionController");

const router = express.Router();

router.post("/", transactionController.createTransaction);

router.get("/", transactionController.getAllTransactions);

router.get("/:id", transactionController.getTransaction);

module.exports = router;
