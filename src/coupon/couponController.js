const { StatusCodes } = require("http-status-codes");
const couponService = require("./couponService");

async function createCoupon(req, res) {
  try {
    const couponInfo = req.body;
    await couponService.createCoupon(couponInfo);
    return res.status(StatusCodes.OK).send({ message: "쿠폰 생성 완료" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function readCouponUsageById(req, res) {
  try {
    const couponId = req.params.id;
    const data = await couponService.readCouponUsageById(couponId);
    return res.status(StatusCodes.OK).send({ data });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function readCouponStatistic(req, res) {
  try {
    const data = await couponService.readCouponStatistic();
    return res.status(StatusCodes.OK).send({ data });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = { createCoupon, readCouponUsageById, readCouponStatistic };
