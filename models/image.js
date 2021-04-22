'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.User, {foreignKey: "userId"});
      // Image.belongsToMany(models.User, {through: models.Favourite, foreignKey: "imageId"});
      Image.belongsToMany(models.User, {through: models.Comment, foreignKey: "imageId"});

    }
  };
  Image.init({
    imgUrl: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "IMAGE URL MUST NOT EMPTY"
        },
        isUrl: {
          args: true,
          msg: "IMAGE MUST BE URL"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "CATEGORY MUST NOT EMPTY"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "DESCRIPTION MUST NOT EMPTY"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};