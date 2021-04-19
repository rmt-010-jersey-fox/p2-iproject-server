'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.User)
      Event.belongsTo(models.Game)
    }
  };
  Event.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title is required'
        }
      }
    },
    content: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Content is required'
        }
      }
    },
    image: DataTypes.STRING,
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Location is required'
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: 'Date is required'
        },
        isDate: {
          msg: 'Invalid format Date!'
        }
      }
    },
    UserId: DataTypes.INTEGER,
    GameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};