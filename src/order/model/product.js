module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "product",
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
      price: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "product",
      charset: "utf8mb4",
    }
  );
};
