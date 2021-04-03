'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Book, Order }) {
            // define association here
            Book.hasMany(Order, {
                foreignKey: "books_id"
            });
        }
    };
    Book.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        type_books_id: {
            type: DataTypes.INTEGER(11),
        },
        name: DataTypes.STRING(255)
    }, {
        sequelize,
        modelName: 'Book',
        tableName: 'books'
    });
    return Book;
};