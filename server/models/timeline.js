'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timeline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Timeline.belongsToMany(models.User, {
        foreignKey: 'UserId',
        through: 'Favorite'
      })
      Timeline.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
    }
  };
  Timeline.init({
    status: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Timeline',
  });
  return Timeline;
};