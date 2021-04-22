'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Banner extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Banner.init({
        name: DataTypes.STRING,
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: 'Banner image cant be empty'
                },
                notEmpty: {
                    args: true,
                    msg: 'Banner image cant be empty'
                },
                isUrl: {
                    args: true,
                    msg: 'invalid image'
                }
            }
        },
        status: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Banner',
    });
    return Banner;
};