'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BuddySchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BuddySchedule.hasMany(models.User)
    }
  };
  BuddySchedule.init({
    UserId: DataTypes.INTEGER,
    time: DataTypes.STRING,
    day: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BuddySchedule',
  });
  return BuddySchedule;
};