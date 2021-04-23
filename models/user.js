'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Finance, { through: 'FinanceDetail'})
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'username cant empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
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
      beforeCreate(user) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};