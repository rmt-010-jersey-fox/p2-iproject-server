"use strict";
const { hash } = require("../helpers/bcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.News, {
        through: "Readlists",
        foreignKey: "UserId",
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: {
          msg: "username has already been used",
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: "email has already been used",
        },
        validate: {
          isEmail: {
            msg: "it has to be an email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          isSixChar(value) {
            if (value.length < 6) {
              throw new Error("6 or more character is required for password");
            }
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (instance, options) => {
          instance.password = hash(instance.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
