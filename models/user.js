"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(8);
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment);
      User.hasMany(models.Watchlist);
    }
  }
  User.init(
    {
      email: {
        validate: {
          notEmpty: {
            msg: "email is required",
          },
          isEmail: {
            msg: "invalid email",
          },
        },
        type: DataTypes.STRING,
      },
      password: {
        validate: {
          notEmpty: {
            msg: "email is required",
          },
        },
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: (ins) => {
          ins.password = bcrypt.hashSync(ins.password, salt);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
