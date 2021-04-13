'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.Rental)
    }
  };
  Car.init({
    type: DataTypes.STRING,
    tranmisi: DataTypes.STRING,
    color: DataTypes.STRING,
    year: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    RentalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};