module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "coupon_usage",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      coupon_id: {
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.INTEGER,
      },
      discounted_amount: {
        type: DataTypes.DECIMAL(7, 2),
      },
    },
    {
      timestamps: true,
      tableName: "coupon_usage",
      charset: "utf8mb4",
    }
  );
};
