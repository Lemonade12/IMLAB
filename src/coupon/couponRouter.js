const express = require("express");
const couponController = require("./couponController");

const router = express.Router();

router.post("/coupon", couponController.createCoupon);
router.get("/coupon/usage/:id", couponController.readCouponUsageById);
//router.patch("/order/:id", orderController.updateOrderStatus);

module.exports = router;
