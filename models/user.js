'use strict';
const {
  Model
} = require('sequelize');
const { hashPsw } = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.BuddyMaterial)
      User.hasMany(models.BuddySchedule)
      User.hasMany(models.Booking)
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          msg : "Email is incorrect"
        },
        notEmpty : {
          msg : "Email should not be empty"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [6],
          msg : 'Password is weak (should be min 6 words length)'
        },
        notEmpty : {
          msg : "Password should not be empty"
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : "student"
    },
    first_name: {
      type : DataTypes.STRING,
      notEmpty : {
        msg : "First Name should not be empty"
      }
    },
    last_name: {
      type : DataTypes.STRING,
      notEmpty : {
        msg : "Last Name should not be empty"
      }
    }
  }, {
    hooks : {
      beforeCreate(user){
        user.password = hashPsw(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};