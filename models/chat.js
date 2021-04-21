'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chat.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  Chat.init({
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER},
    chat: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Chat Must Be Fiiled'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};