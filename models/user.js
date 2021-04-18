'use strict';
const { hash, compare } = require('../helper/bcypt')
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
      User.belongsToMany(models.Book, { through: models.BookUser, foreignKey: 'userId' })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'email harus diisi'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password harus diisi'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.password = hash(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};