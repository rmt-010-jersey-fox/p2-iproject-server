'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Thread)
      User.hasMany(models.Event)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Email is required'
        }, 
        isEmail: {
          msg: 'Invalid Format Email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password is required'
        }, 
        min: {
          args: 6,
          msg: 'Password must be  6 Characters or more '
        }
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Username is required'
        }
      }
    },
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, options){
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};