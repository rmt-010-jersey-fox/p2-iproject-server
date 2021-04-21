'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BarberShop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BarberShop.belongsToMany(models.User, {
        through: "Appointment",
        foreignKey: "BarberShopId"
      })
      BarberShop.hasMany(models.Service)
      BarberShop.hasMany(models.Barber)
    }
  };
  BarberShop.init({
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    latitude: DataTypes.STRING,
    langitude: DataTypes.STRING,
    open: DataTypes.STRING,
    closed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BarberShop',
  });
  return BarberShop;
};