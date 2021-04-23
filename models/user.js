'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Playlist, {
        foreignKey: 'UserId'
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already registered',
        fields: ['email']
      },
      validate: {
        isEmail: {
          msg: 'Invalid Email Format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: 'Password at least have 6 characters'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Insert Name'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};