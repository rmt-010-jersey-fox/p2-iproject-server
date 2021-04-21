'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.User)
    }
  };
  Bookmark.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { args: true, msg: "title can't be empty" },
      },
    },
    lang: {
      type: DataTypes.STRING,
    },
    mangaLink: {
      type: DataTypes.STRING,
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};