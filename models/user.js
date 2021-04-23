"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Quran)
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: `Email already exists!`,
        },
        validate: {
          notEmpty: {
            args: true,
            msg: `Email is required!`,
          },
          isEmail: {
            args: true,
            msg: `Invalid email format`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: `Password is required!`,
          },
          len: {
            args: [6, 100],
            msg: `Password more than 6 characters`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password);
        },
      },
    }
  );
  return User;
};
