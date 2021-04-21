"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Watchlist.belongsTo(models.User);
    }
  }
  Watchlist.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      UserId: DataTypes.INTEGER,
      MovieId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Watchlist",
    }
  );
  return Watchlist;
};
