'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Order }) {
            // define association here
            User.hasMany(Order, {
                foreignKey: "users_id"
            });
        }
    };
    User.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(255),
        address: DataTypes.STRING(255),
        phone: DataTypes.STRING(255),
        gender: DataTypes.STRING(10)
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users'
    });
    return User;
};