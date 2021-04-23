'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User)
    }
  };
  Post.init({
    filePath: {
      type: DataTypes.TEXT,
      validate:{
        notEmpty: {
          msg: 'Must Choose an Image'
        }
      }
    },
    caption: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'Must Give a Caption'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};