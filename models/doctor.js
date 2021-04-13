'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsTo(models.Poli)
      Doctor.belongsToMany(models.Patient, {through: models.Schedule})
      Doctor.hasMany(models.Schedule)
    }
  };
  Doctor.init({
    full_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Doctor name is required'
        }
      }
    },
    session: {
      type: DataTypes.STRING,
      valdiate: {
        notEmpty: {
          msg: 'Session is required'
        }
      }
    },
    PoliId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};