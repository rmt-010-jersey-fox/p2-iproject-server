"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.belongsToMany(models.User, {
        through: "Readlists",
        foreignKey: "NewsId",
      });
    }
  }
  News.init(
    {
      title: {
        type: DataTypes.STRING,
        unique: {
          msg: "You've added this news",
        },
      },
      description: DataTypes.TEXT,
      url: DataTypes.STRING,
      author: DataTypes.STRING,
      image: DataTypes.TEXT,
      language: DataTypes.STRING,
      category: DataTypes.STRING,
      published: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
