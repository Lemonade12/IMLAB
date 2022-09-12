const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "country_code",
    {
      country_idx: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      country_code: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      country_dcode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      country_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "country_code",
      charset: "utf8mb4",
      timestamps: false,
    }
  );
};
