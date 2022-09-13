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

async function readOrder(req, res) {
  try {
    const filter = {
      search: req.query.search,
      status: req.query.status,
      start: req.query.start,
      end: req.query.end,
    };
    const data = await orderService.readOrder(filter);
    return res.status(StatusCodes.OK).send({ data });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function updateOrderStatus(req, res) {
  try {
    const orderId = req.params.id;
    const payState = req.body.pay_state;
    await orderService.updateOrderStatus(orderId, payState);
    return res.status(StatusCodes.OK).send({ message: "업데이트 완료" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
  createOrder,
  readOrder,
  updateOrderStatus,
};
