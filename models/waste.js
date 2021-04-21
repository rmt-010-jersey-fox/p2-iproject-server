'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Waste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Waste.belongsToMany(models.User, {through: models.UserWaste, foreignKey: 'UserId'})
    }
  };
  Waste.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'name is required'
        }
      }
    },
    condition: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'condition is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'price is required'
        },
        isNumeric: {
          msg: 'Must be number'
        }
      }
    },
    baseUnit: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Waste',
  });
  return Waste;
};