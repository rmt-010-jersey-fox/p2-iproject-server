'use strict';

const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

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
      User.hasMany(models.Image, {foreignKey: "userId"});
      // User.belongsToMany(models.Image, {through: models.Favourite, foreignKey: "userId"});
      User.belongsToMany(models.Image, {through: models.Comment, foreignKey: "userId"});
      
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "USERNAME MUST NOT EMPTY"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "EMAIL MUST NOT EMPTY"
        },
        isEmail: {
          args: true,
          msg: "MUST BE EMAIL FORMAT"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "PASSWORD MUST NOT EMPTY"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = bcrypt.hashSync(instance.password, salt);
      }
    }
  });
  return User;
};