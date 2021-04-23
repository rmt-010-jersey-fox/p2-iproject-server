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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Anime Name Cannot Be Empty'
        },
      },
    },
    imageURL: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Anime imageURL Cannot Be Empty'
        },
      },
    },
    episodes: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Episodes Cannot Be Empty'
        },
        inMinus(value) {
          if (value < 0) {
            throw new Error('Episodes Cannot Less than 0')
          }
        },
        isInt: {
          msg: 'Episodes must be a number'
        }
      }
    },
    totalEpisodes: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Total Episodes Cannot Be Empty'
        },
        inMinus(value) {
          if (value < 0) {
            throw new Error('Total Episodes Cannot Less than 0')
          }
        },
        isInt: {
          msg: 'Total Episodes must be a number'
        }
      }
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};