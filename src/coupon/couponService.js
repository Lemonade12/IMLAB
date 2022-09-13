const couponRepo = require("./couponRepository");

async function createCoupon(couponInfo) {
  const data = await couponRepo.createCoupon(couponInfo);
  return data;
}

async function readCouponUsageById(couponId) {
  const isExistedCoupon = await couponRepo.readCouponById(couponId);
  if (!isExistedCoupon) {
    const error = new Error("해당 쿠폰이 존재하지 않습니다.");
    error.statusCode = 404;
    throw error;
  }
  const data = await couponRepo.readCouponUsageById(couponId);
  return data;
}

module.exports = { createCoupon, readCouponUsageById };
