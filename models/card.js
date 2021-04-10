'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {
        Card.belongsTo(models.Deck)
    }
  };
  Card.init({
    front: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please fill the card front"
        },
        notEmpty: {
          msg: "Card front can't be empty"
        }
      }
    },
    back: DataTypes.STRING,
    mastery: DataTypes.INTEGER,
    due: DataTypes.DATEONLY,
    DeckId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (card, options) => {
        card.mastery = 0
        card.due = new Date()
      }
    },
    sequelize,
    modelName: 'Card',
  });
  return Card;
};