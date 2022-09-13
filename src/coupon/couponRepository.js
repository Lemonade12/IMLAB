const db = require("../../database/index");
const coupon = db.coupon;
const coupon_usage = db.coupon_usage;
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function readCouponByCode(couponCode) {
  const data = await coupon.findOne({
    where: { code: couponCode },
  });
  return data;
}

async function readCouponById(couponId) {
  const data = await coupon.findOne({
    where: { id: couponId },
  });
  return data;
}

async function createCouponUsage(couponUsageInfo) {
  return coupon_usage.create(couponUsageInfo);
}

async function createCoupon(couponInfo) {
  const data = await coupon.create(couponInfo);
  return data;
}

async function readCouponUsageById(couponId) {
  const data = await coupon_usage.findAll({
    attributes: [
      ["id", "쿠폰사용내역_id"],
      ["coupon_id", "쿠폰_id"],
      ["order_id", "주문내역_id"],
      ["discounted_amount", "할인금액"],
      ["createdAt", "사용날짜"],
    ],
    where: { coupon_id: couponId },
  });
  return data;
}

module.exports = {
  readCouponByCode,
  readCouponById,
  createCouponUsage,
  createCoupon,
  readCouponUsageById,
};
