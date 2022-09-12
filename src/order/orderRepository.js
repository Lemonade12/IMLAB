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
  const data = await delivery_cost.findOne({
    attributes: [countryName],
    where: { quantity: quantity },
    raw: true,
  });
  const cost = Object.values(data);
  return cost;
}

async function createOrder(orderInfo) {
  return order.create(orderInfo);
}

module.exports = { readProductById, readCountryById, readDeliveryCost, createOrder };
