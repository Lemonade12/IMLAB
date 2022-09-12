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
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.DECIMAL(7, 2),
      },
      buyr_city: {
        type: DataTypes.STRING,
      },
      buyr_country: {
        type: DataTypes.STRING,
      },
      buyr_zipx: {
        type: DataTypes.STRING,
      },
      vccode: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
      tableName: "order",
      charset: "utf8mb4",
    }
  );
};
