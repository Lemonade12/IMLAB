const db = require("../../database/index");
const coupon = db.coupon;
const coupon_usage = db.coupon_usage;
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function readCouponById(couponId) {
  const data = await coupon.findOne({
    where: { id: couponId },
  });
  return data;
}

async function createCouponUsage(couponUsageInfo) {
  return coupon_usage.create(couponUsageInfo);
}

module.exports = { readCouponById, createCouponUsage };
