const express = require("express");
const orderController = require("./orderController");

const router = express.Router();

router.post("/order", orderController.createOrder);
router.get("/order", orderController.readOrder);
router.patch("/order/:id", orderController.updateOrderStatus);

module.exports = router;
