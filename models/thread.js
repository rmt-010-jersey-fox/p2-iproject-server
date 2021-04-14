'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Thread.belongsTo(models.User)
    }
  };
  Thread.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title is required'
        }
      }
    },
    content: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Content is required'
        }
      }
    },
    image: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Thread',
  });
  return Thread;
};