'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersTeam.belongsTo(models.User, {foreignKey: 'UserId', targetKey: 'id'})
      UsersTeam.belongsTo(models.Player, {foreignKey: 'PlayerId', targetKey: 'id'})
    }
  };
  UsersTeam.init({
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersTeam',
  });
  return UsersTeam;
};