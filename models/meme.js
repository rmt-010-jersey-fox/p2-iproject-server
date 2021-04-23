'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Meme.belongsToMany(models.User, { through: 'Favorite', foreignKey: 'MemeId'})
      Meme.belongsTo(models.User, { foreignKey: 'UserId'})
    }
  };
  Meme.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Cannot be empty'
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Cannot be empty'
        }
      }
    },
    likes: DataTypes.INTEGER,
    reported: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meme',
  })
  Meme.beforeCreate((meme, option) => {
    meme.likes = 0,
    meme.reported = 0
  });
  return Meme;
};