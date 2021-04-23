'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rental.hasMany(models.Car)
      Rental.hasMany(models.Transaction)
    }
  };
  Rental.init({
    name: DataTypes.STRING,
    pic: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    bank_account: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};