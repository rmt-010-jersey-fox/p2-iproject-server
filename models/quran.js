'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quran.belongsTo(models.User)
    }
  };
  Quran.init({
    SurahId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surah is required!"
        },
        min: {
          args: [1],
          msg: "Cannot set minimum value"
        }
      }
    },
    UserId: DataTypes.INTEGER,
    surahName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surah Name is required!",
        },
      },
    },
    surahArti: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surah Arti is required!",
        },
      },
    },
    surahJenis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surah Jenis is required!",
        },
      },
    },
    surahAyat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Surah Ayat is required!",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Quran',
  });
  return Quran;
};