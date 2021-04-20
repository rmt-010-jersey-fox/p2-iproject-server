'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Playlist.belongsTo( models.User, {
        foreignKey: 'UserId'
      })
      Playlist.belongsTo( models.Song, {
        foreignKey: 'SongId'
      })
    }
  };
  Playlist.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Insert Playlist Name"
        }
      }
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          msg: "Insert Valid URL"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};