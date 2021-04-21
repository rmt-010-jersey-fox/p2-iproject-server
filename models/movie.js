'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
    }
  };
  Movie.init({
    poster_path: DataTypes.STRING,
    title: DataTypes.STRING,
    overview: DataTypes.STRING,
    popularity: DataTypes.INTEGER,
    vote_average: DataTypes.INTEGER,
    release_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};