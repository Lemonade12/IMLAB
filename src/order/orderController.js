const { StatusCodes } = require("http-status-codes");
const orderService = require("./orderService");

async function createOrder(req, res) {
  try {
    const orderInfo = req.body;
    await orderService.createOrder(orderInfo);
    return res.status(StatusCodes.OK).send({ message: "주문 완료" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
  createOrder,
};
