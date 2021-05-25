'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersTeam.belongsTo(models.User, {foreignKey: 'UserId', targetKey: 'id'})
      UsersTeam.belongsTo(models.Player, {foreignKey: 'PlayerId', targetKey: 'id'})
      UsersTeam.belongsTo(models.Club, {foreignKey: 'ClubId', targetKey: 'id'})
    }
  };
  UsersTeam.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name is required'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'UserId is required'
        }
      }
    },
    PlayerId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: 'PlayerId is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UsersTeam',
  });
  return UsersTeam;
};