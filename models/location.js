'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Location.hasMany(models.Product, { foreignKey: 'LocationId' })
        }
    };
    Location.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Category name cant be empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Category name cant be empty'
                }
            }
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isIn: {
                    args: [
                        [0, 1]
                    ],
                    msg: 'Status Is invalid'
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Location',
    });
    return Location;
};