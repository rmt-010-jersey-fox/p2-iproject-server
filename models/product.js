'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.hasMany(models.Cart, {
                foreignKey: 'ProductId'
            })
            Product.belongsTo(models.Location, {
                foreignKey: 'LocationId'
            })
        }
    };
    Product.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Product name cant be left empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Product name cant be left empty'
                },
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Product price cant be left empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Product price cant be left empty'
                },
                isNumeric: {
                    args: true,
                    msg: 'Price is invalid'
                },
                min: {
                    args: [0],
                    msg: 'Price is invalid'
                }
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Product stock cant be left empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Product stock cant be left empty'
                },
                isNumeric: {
                    args: true,
                    msg: 'Stock is invalid'
                },
                min: {
                    args: [0],
                    msg: 'Stock is invalid'
                }
            }
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Product image url cant be left empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Product image url cant be left empty'
                },
                isUrl: {
                    args: true,
                    msg: 'invalid image'
                }
            }
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isIn: {
                    args: [
                        [0, 1, 5]
                    ],
                    msg: 'Status Is invalid'
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};