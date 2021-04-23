'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.belongsTo(models.Tournament)
      Team.hasMany(models.Bracket)
    }
  };
  Team.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Name is required"
        },
        notNull : {
          argss : true,
          msg : "Name is required"
        },
        isAlphanumeric : { msg: 'Name format should only contain letter and number'}
      },
      allowNull : false
    },
    description: DataTypes.STRING,
    TournamentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};