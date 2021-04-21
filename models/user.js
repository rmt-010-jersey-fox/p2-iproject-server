'use strict';
const {hashPassword} = require('../helpers/bcrypt')
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
      User.hasOne(models.Room)
    }
  };
  User.init({
    email: {type:DataTypes.STRING,
    validate:{
      isEmail:{
        args:true,
        msg:"Invalid Email Format"
      },notEmpty:{
        msg:"Email cannot be Empty"
      }
    }},
    password: {type:DataTypes.STRING,
    validate:{
      notEmpty:{
        msg:"Password cannot be Empty"
      },len:{
        args:5,
        msg:"Minimum 5 Character or More"
      }
    }},
    username: {type:DataTypes.STRING,
    validate:{
      notEmpty:{
        msg:"Username Cannot be Empty"
      }
    }},
    role: {type:DataTypes.STRING,
    defaultValue:"customer"
  }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate',(instance,option)=>{
    instance.password = hashPassword(instance.password)
  })
  return User;
};