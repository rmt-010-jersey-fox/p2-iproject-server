'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bracket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bracket.belongsTo(models.Team)
      Bracket.belongsTo(models.Tournament)
    }
  };
  Bracket.init({
    TeamId: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    TournamentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bracket',
  });
  return Bracket;
};