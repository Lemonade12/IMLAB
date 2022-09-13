const db = require("../../database/index");
const order = db.order;
const product = db.product;
const country_code = db.country_code;
const delivery_cost = db.delivery_cost;
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function readProductById(productId) {
  const data = await product.findOne({
    where: { id: productId },
  });
  return data;
}

async function readCountryById(countryId) {
  const data = await country_code.findOne({
    where: { country_idx: countryId },
  });
  return data;
}

async function readDeliveryCost(quantity, countryName) {
  const snakeCountryName = countryName.replaceAll(" ", "_");
  const data = await delivery_cost.findOne({
    attributes: [snakeCountryName],
    where: { quantity: quantity },
    raw: true,
  });
  const cost = Object.values(data);
  return cost;
}

async function createOrder(orderInfo) {
  return order.create(orderInfo);
}

async function readOrderById(orderId) {
  const data = await order.findOne({
    where: { id: orderId },
  });
  return data;
}

async function readOrderByFilter(filter) {
  if (filter.search == undefined) {
    const data = await order.findAll({
      attributes: [
        ["id", "주문내역_id"],
        ["user_name", "유저명"],
        ["pay_state", "주문상태"],
        [sequelize.col("product.name"), "상품명"],
        [sequelize.col("product.price"), "상품가격"],
        ["quantity", "수량"],
        ["total_price", "총 금액"],
        [sequelize.col("country_code.country_code"), "국가코드"],
        [sequelize.col("country_code.country_dcode"), "국가번호"],
        [sequelize.col("country_code.country_name"), "국가명"],
        ["buyr_city", "도시"],
        ["buyr_zipx", "우편번호"],
      ],
      include: [
        {
          model: product,
          attributes: [],
        },
        {
          model: country_code,
          attributes: [],
        },
      ],
      where: {
        createdAt: {
          [Op.lt]: filter.end,
          [Op.gte]: filter.start,
        },
        pay_state: {
          [Op.in]: filter.status,
        },
      },
      order: [["createdAt", "DESC"]],
    });
    return data;
  } else {
    const data = await order.findAll({
      attributes: [
        ["id", "주문내역_id"],
        ["user_name", "유저명"],
        ["pay_state", "주문상태"],
        [sequelize.col("product.name"), "상품명"],
        [sequelize.col("product.price"), "상품가격"],
        ["quantity", "수량"],
        ["total_price", "총 금액"],
        [sequelize.col("country_code.country_code"), "국가코드"],
        [sequelize.col("country_code.country_dcode"), "국가번호"],
        [sequelize.col("country_code.country_name"), "국가명"],
        ["buyr_city", "도시"],
        ["buyr_zipx", "우편번호"],
      ],
      include: [
        {
          model: product,
          attributes: [],
        },
        {
          model: country_code,
          attributes: [],
        },
      ],
      where: {
        createdAt: {
          [Op.lt]: filter.end,
          [Op.gte]: filter.start,
        },
        pay_state: {
          [Op.in]: filter.status,
        },
        user_name: {
          [Op.like]: "%" + filter.search + "%",
        },
      },
      order: [["createdAt", "DESC"]],
    });
    return data;
  }
}

async function updateOrderStatus(orderId, payState) {
  const data = await order.update(
    { pay_state: payState },
    {
      where: { id: orderId },
    }
  );
  return data;
}

module.exports = {
  readProductById,
  readCountryById,
  readDeliveryCost,
  createOrder,
  readOrderById,
  readOrderByFilter,
  updateOrderStatus,
};
