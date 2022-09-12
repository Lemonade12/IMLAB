module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "order",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
      },
      pay_state: {
        type: DataTypes.STRING,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      total_price: {
        type: DataTypes.DECIMAL(7, 2),
      },
      country_idx: {
        type: DataTypes.INTEGER,
      },
      buyr_city: {
        type: DataTypes.STRING,
      },
      buyr_zipx: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      tableName: "order",
      charset: "utf8mb4",
    }
  );
};
