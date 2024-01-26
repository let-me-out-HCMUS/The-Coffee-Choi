const express = require("express");
const transactionController = require("../controllers/transactionController");

const router = express.Router();

router.get("/getTransaction", transactionController.getTransaction);
router.post("/createTransaction", transactionController.createTransaction);

module.exports = router;
