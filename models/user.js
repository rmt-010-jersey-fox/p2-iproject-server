'use strict';
const hashPassword = require("../helpers/hash-password")
const avatarUrlGenerator = require("../helpers/random-avatar-generator")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Deck, {foreignKey: "UserId"})
    }

    showLevelAndNext() {
      let level = 1
      let residualXP = this.exp
      let requiredXP = 10 //base

      while(residualXP >= requiredXP) {
        residualXP -= requiredXP
        level ++

        if(level <= 5) {
          requiredXP += 10
        } else if(level <= 10) {
          requiredXP = 100 + (25 * (level - 5))
        } else if(level <= 25) {
          requiredXP = 30 * level
        } else {
          requiredXP = 1000
        }
      }

      return {
        level,
        nextLevel: requiredXP- residualXP
      }
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please fill your username"
        },
        isAlphanumeric: {
          msg: "Please use alphanumeric characters only fo username"
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please fill your email"
        },
        isEmail: {
          msg: "Please fill your email with a correct format: example@mail.com"
        }
      }
  },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please fill your password"
        },
        notEmpty: {
          msg: "Password can't be empty"
        }
      }
  },

    exp: DataTypes.INTEGER,
    cardsCleared: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    avatarImageUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: "Please fill avatar url with valid url format"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.exp = 0
        user.cardsCleared = 0
        user.desc = 'Just a yet another new player in Flashero'
        user.avatarImageUrl = avatarUrlGenerator(user.username)
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};