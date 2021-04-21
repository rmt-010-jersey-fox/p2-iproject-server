'use strict';
const { hashPassword } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Anime)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Username Cannot Be Empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Email Cannot Be Empty'
        },
        isEmail: {
          msg: 'Please Use Email Format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password Cannot Be Empty'
        },
        len: {
          args: [2, 13],
          msg: 'Password Length Can Only From 2 to 13 Characters'
        }
      }
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    },
    modelName: 'User',
  });
  return User;
};