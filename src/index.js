const express = require("express");
const orderRouter = require("./order/orderRouter");
//const couponRouter = require("./coupon/couponRouter");
const router = express.Router();

router.use(orderRouter);
//router.use(couponRouter);

module.exports = router;
