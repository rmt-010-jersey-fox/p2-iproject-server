'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trip.belongsTo(models.User, {foreignKey: 'userId'})
      Trip.hasMany(models.Todo, {foreignKey: 'tripId'})
    }
  };
  Trip.init({
    title: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    depatureDate: DataTypes.DATE,
    hotels: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};