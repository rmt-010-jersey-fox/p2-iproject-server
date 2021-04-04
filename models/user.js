'use strict';
const bcrypt = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
const { hash } = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      validate: {
        type: DataTypes.STRING,
        notEmpty: {
          msg: 'username cant empty'
        }
      }
    },
    email: {
      validate: {
        type: DataTypes.STRING,
        isEmail: {
          msg: 'please insert valid email'
        },
        notEmpty: {
          msg: 'username cant empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        password(value) {
          if ( value.length < 6 ) {
            throw 'Minimal password lenght is 6'
          }
        },
        notEmpty : {
          msg: 'password cant empty'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};