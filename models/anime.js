'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime.belongsTo(models.User)
    }
  };
  Anime.init({
    name: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    episodes: DataTypes.STRING,
    totalEpisodes: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};