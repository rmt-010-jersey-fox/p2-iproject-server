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
     Patient.belongsTo(models.Disease, {foreignKey: 'DiseaseId'})
    }
  };
  Patient.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "name cannot be empty"
        }
      }
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "date of birth cannot be empty"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "gender cannot be empty"
        }
      }
    },
    status: DataTypes.BOOLEAN,
    UserId: {
      type: DataTypes.INTEGER,
    },
    DiseaseId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Patient',
  });
  Patient.beforeCreate((instance, options) => {
    instance.status = false
  })
  return Patient;
};