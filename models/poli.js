'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Poli.hasMany(models.Doctor)
    }
  };
  Poli.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Poli',
  });
  return Poli;
};