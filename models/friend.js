'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {

    static associate(models) {
      // define association here
      Friend.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'UserId'
      })
      Friend.belongsTo(models.User, {
        as: 'friend',
        foreignKey: 'FriendId'
      })
    }
  };
  Friend.init({
    UserId: DataTypes.INTEGER,
    FriendId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};