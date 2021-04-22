'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Meme, { through: 'Favorite', foreignKey: 'UserId'})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'Yang bener nulisnya bang'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Cannot be empty'
        }
      }
    },
    roles: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  })
  User.beforeCreate((user, option) => {
    user.password = hashPassword(user.password)
    if (!user.roles) user.roles = 'Rakyat'
  });
  return User;
};