'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsTo(models.Club)
      Player.belongsToMany(models.User, {through: models.UsersTeam})
    }
  };
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    countryOfBirth: DataTypes.STRING,
    nationality: DataTypes.STRING,
    shirtNumber: DataTypes.INTEGER,
    role: DataTypes.STRING,
    ClubId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};