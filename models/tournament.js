'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tournament.belongsTo(models.User)
      Tournament.hasMany(models.Team)
      Tournament.hasMany(models.Bracket)
    }
  };
  Tournament.init({
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
        }
      },
      allowNull : false
    },
    description: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "Descritpion Tournament is required"
        },
        notNull : {
          argss : true,
          msg : "Descritpion Tournament is required"
        }
      },
      allowNull : false
    },
    game: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tournament',
    hooks: {
      beforeCreate(instance, options){
        if(instance.game){
          instance.game = instance.game
        } else {
          instance.game = instance.name
        }
      }
    }
  });
  return Tournament;
};