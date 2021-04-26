'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Appointment.init({
    UserId: DataTypes.INTEGER,
    BarberShopId: DataTypes.INTEGER,
    ServiceId: DataTypes.INTEGER,
    BarberId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    scheduleStart: DataTypes.STRING,
    scheduleEnd: DataTypes.STRING,
    message: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate(user){
        user.status = 'progress'
      },
    },
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};