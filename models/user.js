'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History)
    }
  };
  User.init({
    username: 
    {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please Input the Username'
        }
      }
    },
    email: 
    {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "The Email Account Already Exists"
      },
      validate: {
        isEmail : {
          args: true,
          msg: 'Invalid Email Format'
        },
        notEmpty: {
          args: true,
          msg: 'Please Input the Email'
        }
      }
    },
    password: 
    {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please Input the Password'
        }
      }
    },
    address: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance){
        instance.password = hashPass(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};