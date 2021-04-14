'use strict';
const {
  Model
} = require('sequelize');
const { hashpassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Tournament)
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "The Email Account Already Exists"
      },
      validate: {
        isEmail: { msg: "Invalid Format Email"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: {
          args: [6],
          msg: "Minimal Password length is 6"
        }
      }
    },
    TournamentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance, options){
        instance.password = hashpassword(instance.password)
      }
    }
  });
  return User;
};