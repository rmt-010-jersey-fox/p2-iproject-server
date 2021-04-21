'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User)
      Booking.belongsTo(models.User, { foreignKey : 'BuddyId'})
      Booking.belongsTo(models.Material)
      Booking.belongsTo(models.BuddySchedule)
    }
  };
  Booking.init({
    UserId: DataTypes.INTEGER,
    BuddyId: DataTypes.INTEGER,
    MaterialId: DataTypes.INTEGER,
    BuddyScheduleId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};