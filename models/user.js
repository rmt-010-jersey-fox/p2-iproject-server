'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.BarberShop, {
        through: "Appointment",
        foreignKey: "UserId"
      })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "username cannot be empty field"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "email cannot be empty field"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "phone cannot be empty field"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: "password cannot be empty field"
        }
      }
    },
  }, {
    hooks:{
      beforeCreate(user){
        user.password = hashPassword(user.password)
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};