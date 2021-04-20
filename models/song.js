'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsToMany(models.User, {
        through: models.Playlist,
        foreignKey: 'SongId'
      })
    }
  };
  Song.init({
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Artist Name Required"
        }
      }
    },
    album_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Album Title Required"
        }
      }
    },
    track_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Song Title Required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};