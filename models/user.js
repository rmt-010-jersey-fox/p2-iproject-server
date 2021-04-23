'use strict';
const {
  Model
} = require('sequelize');
const {
  hashPassword
} = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post)
      User.hasMany(models.Friend)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Email can't be empty",
        },
        isEmail: {
          msg: "Must register with a valid email address",
        },
      },
      unique: {
        msg: "Email already registered",
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password can't be empty",
        },
        sixChar(value) {
          if (value.length < 6)
            throw "Password at least 6 characters required"
        }
      },
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Username can't be empty"
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
    }
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.password = hashPassword(instance.password)
        instance.username = instance.username.replace(' ','')
        if(!instance.avatar) instance.avatar = `https://avatars.dicebear.com/api/micah/${instance.username}.svg`
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};