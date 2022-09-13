var DataTypes = require("sequelize").DataTypes;
var countryCodeModel = require("../src/order/model/country_code");
var deliveryCostModel = require("../src/order/model/delivery_cost");
var orderModel = require("../src/order/model/order");
var couponModel = require("../src/coupon/model/coupon");
var couponUsageModel = require("../src/coupon/model/coupon_usage");
var productModel = require("../src/order/model/product");

function initModels(sequelize) {
  var country_code = countryCodeModel(sequelize, DataTypes);
  var delivery_cost = deliveryCostModel(sequelize, DataTypes);
  var order = orderModel(sequelize, DataTypes);
  var coupon = couponModel(sequelize, DataTypes);
  var coupon_usage = couponUsageModel(sequelize, DataTypes);
  var product = productModel(sequelize, DataTypes);

  order.belongsTo(product, { foreignKey: "product_id" });
  product.hasMany(order, { foreignKey: "product_id" });
  order.belongsTo(country_code, { foreignKey: "country_idx" });
  country_code.hasMany(order, { foreignKey: "country_idx" });
  coupon_usage.belongsTo(coupon, { foreignKey: "coupon_id" });
  coupon.hasMany(coupon_usage, { foreignKey: "coupon_id" });
  coupon_usage.belongsTo(order, { foreignKey: "order_id" });
  order.hasOne(coupon_usage, { foreignKey: "order_id" });

  return {
    country_code,
    delivery_cost,
    order,
    coupon,
    coupon_usage,
    product,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
