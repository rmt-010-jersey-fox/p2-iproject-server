'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsToMany(models.User, {through: 'Transaction'})
    }
  };
  Recipe.init({
    title: DataTypes.STRING,
    thumb: DataTypes.STRING,
    key: DataTypes.STRING,
    times: DataTypes.STRING,
    portion: DataTypes.STRING,
    difficulty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};