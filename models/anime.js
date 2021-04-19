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
      // define association here
      this.belongsTo(models.User)
    }
  };
  Anime.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "title is required"
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "image_url is required"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "status is required"
        }
      }
    },
    duration: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "duration is required"
        }
      }
    },
    score: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "score is required"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};