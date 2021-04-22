'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasMany(models.Booking)
    }
  };
  Room.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: {type:DataTypes.INTEGER,
    validate:{
      isInt :{
        msg:"Price must be an Integer"
      },min:{
        args:[0],
        msg:"Price cannot be Minus"
      }
    }},
    availableRoom:{type:DataTypes.INTEGER,
    validate:{
      isInt:{
        msg:"AvailableRoom must be an Integer"
      },min:{
        args:[0],
        msg:"Available Room cannot be Minus"
      }
    }}
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};