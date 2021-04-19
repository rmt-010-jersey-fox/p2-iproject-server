'use strict';
const {
  Model
} = require('sequelize');
const { encrypt } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Bookmark)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: { args: true, msg: "email already exists" },
      validate: {
        notEmpty: { args: true, msg: "email can't be empty" },
        isEmail: { msg: "invalid email format" },
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: { notEmpty: { args: true, msg: "password can't be empty" } },
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instances) {
        instances.Role = "customer";
        instances.password = encrypt(instances.password);
      },
    },
  });
  return User;
};