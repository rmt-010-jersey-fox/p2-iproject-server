"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Readlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Readlist.belongsTo(models.User, { foreignKey: "UserId" });
      Readlist.belongsTo(models.News, { foreignKey: "NewsId" });
    }
  }
  Readlist.init(
    {
      NewsId: {
        type: DataTypes.INTEGER,
        unique: {
          msg: "You've added this news",
        },
      },
      UserId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Readlist",
    }
  );
  return Readlist;
};
