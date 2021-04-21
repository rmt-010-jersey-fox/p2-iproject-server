'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vacation.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Vacation.hasMany(models.Destination, {
        foreignKey: 'vacationId'
      })
    }
  };
  Vacation.init({
    start_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toISOString(),
          msg: "Input must be after today's date"
        },
        isDate: {
          args: true,
          msg: 'Input must be "YYYY-MM-DD"'
        }
      }
    },
    end_date: {
      type: DataTypes.DATE,
      validate: {
        isAfter: {
          args: new Date().toISOString(),
          msg: "Input must be after today's date"
        },
        isDate: {
          args: true,
          msg: 'Input must be "YYYY-MM-DD"'
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "City cannot be empty"
        }
      }
    },
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    photo_reference: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vacation',
  });
  return Vacation;
};