'use strict';
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
      // define association here
    }
  };
  User.init({
    username: {
      type : DataTypes.STRING,
      unique : true,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Username must be filled!'
        }
      }
    } ,
    email: {
      type : DataTypes.STRING,
      unique : true ,
      validate : {
        isEmail : {
          args : true,
          msg : `Must be email format!`
        }
      },
      notEmpty : {
        args : true,
        msg : `Email is required!`
      }
    } ,
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Email and Password must be filled!'
        }
      },
      len : {
        args : [6-8],
        msg : `Password must be 6 characters `
      }
    } 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};