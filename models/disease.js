'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Disease.belongsToMany(models.User,{through: models.Patient})
    }
  };
  Disease.init({
    name: DataTypes.STRING,
    level_of_risk: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Disease',
  });
  Disease.beforeCreate((instance, options) => {
  })
  return Disease;
};