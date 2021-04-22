'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyMovie.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  MyMovie.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'title can not be empty'
        }
      }
    },
    poster_path: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'poster_path can not be empty'
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'MyMovie',
  });
  return MyMovie;
};