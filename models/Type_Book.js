'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Type_Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate() {
            // define association here
        }
    };
    Type_Book.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
        },
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Type_Book',
        tableName: 'type_books'
    });
    return Type_Book;
};