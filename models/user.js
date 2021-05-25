'use strict';

const {generatePassword} = require('../helpers/bcrypt')

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
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'E-Mail Must Be Fiiled'
        },
        isEmail: {
          args: true,
          msg: 'Only E-Mail Required'
        }
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username Must Be Fiiled'
        },
        len: {
          args: [8],
          msg: 'Min. Char Required is 8'
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username Must Be Fiiled'
        },
        len: {
          args: [8],
          msg: 'Min. Char Required is 8'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, options) => {
    user.password = generatePassword(user.password)
  })
  return User;
};