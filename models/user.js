'use strict';
const {
    Model
} = require('sequelize');
const { hash } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Cart, {
                foreignKey: 'UserId'
            })
            User.hasMany(models.Wishlist, {
                foreignKey: 'UserId'
            })
            User.hasMany(models.Transaction, {
                foreignKey: 'UserId'
            })
        }
    };
    User.init({
        name: DataTypes.STRING,
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Password must not be empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Password must not be empty'
                },
                len: {
                    args: [4, 20],
                    msg: 'Password length must be around 4-20 characters'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Email must not be empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Email must not be empty'
                },
                isEmail: {
                    args: true,
                    msg: 'Email is not valid'
                }
            }
        },
        level: DataTypes.INTEGER
    }, {
        hooks: {
            beforeCreate: (data, opt) => {
                data.password = hash(data.password)
            },
            beforeUpdate: (data, opt) => {
                if (data.password) {
                    data.password = hash(data.password)
                }
            }
        },
        sequelize,
        modelName: 'User',
    });
    return User;
};