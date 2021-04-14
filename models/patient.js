'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Patient.belongsTo(models.User, {foreignKey: 'UserId'})
     Patient.hasMany(models.Disease, {foreignKey: 'DiseaseId'})
    }
  };
  Patient.init({
    name: DataTypes.STRING,
    date_of_birth: DataTypes.DATEONLY,
    gender: DataTypes.STRING,
    date_of_entry: DataTypes.DATEONLY,
    DiseaseId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};