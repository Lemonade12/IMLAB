const express = require("express");
const orderController = require("./orderController");

const router = express.Router();

router.post("/order", orderController.createOrder);

module.exports = router;
