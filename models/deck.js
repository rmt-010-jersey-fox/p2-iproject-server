'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Deck.belongsTo(models.User)
      Deck.hasMany(models.Card, {foreignKey: "DeckId"})
    }
  };
  Deck.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please fill the deck name"
        },
        notEmpty: {
          msg: "Deck name can't be empty"
        }
      }
    },

    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};