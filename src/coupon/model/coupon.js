module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "coupon",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: true,
      tableName: "coupon",
      charset: "utf8mb4",
    }
  );
};
