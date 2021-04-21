'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destination.belongsTo(models.Vacation, {
        foreignKey: 'vacationId'
      })
    }
  };
  Destination.init({
    place_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Place name cannot be empty"
        }
      }
    },
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    vacationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};