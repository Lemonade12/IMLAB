const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "delivery_cost",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Australia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Brazil: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Canada: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      China: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      France: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Germany: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Hong_kong: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Indonesia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Japan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Malaysia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      New_Zealand: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Philippines: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Russia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Singapore: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Spain: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Taiwan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Thailand: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      UK: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      USA: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Vietnam: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Cambodia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Laos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Macao: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Mongolia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Myanmar: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Bangladesh: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Bhutan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Brunei_Darussala: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      India: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Maldives: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Nepal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Sri_Lanka: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Albania: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Armenia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Austria: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Azerbaijan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Bahrain: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Belarus: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Belgium: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Bulgaria: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Bosnia_And_Herzegovina: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Croatia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Cyprus: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Czech_Rep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Denmark: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Estonia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Finland: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Georgia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Greece: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Hungary: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Iran: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Ireland: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Israel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Jordan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Kazakhstan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Latvia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Luxembourg: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Macedonia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Netherlands: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Norway: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Oman: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Pakistan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Poland: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Portugal: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Qatar: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Romania: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Saudi_Arabia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Slovakia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Slovenia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Sweden: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Switzerland: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Turkey: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Ukraine: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      United_Arab_Emirates: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Uzbekistan: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Algeria: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Antiless_Netherlands: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Argentina: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Botswana: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Cape_Verde: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Chile: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Costa_Rica: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Cuba: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Djibouti: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Dominican_Republic: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Ecuador: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Egypt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Eritrea: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Ethiopia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Fiji: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Kenya: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Lesotho: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Mauritius: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Mexico: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Morocco: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Mozambique: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Nigeria: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Panama: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Peru: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Rwanda: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Tanzania: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Tunisia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Zambia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      South_Korea: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "delivery_cost",
      charset: "utf8mb4",
      timestamps: false,
    }
  );
};
