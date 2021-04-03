'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Order, Book }) {
            // define association here
            Order.belongsTo(User);
            Order.belongsTo(Book);
        }
    };
    Order.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        users_id: {
            type: DataTypes.INTEGER(11),
        },
        books_id: {
            type: DataTypes.INTEGER(11),
        },
        qty: DataTypes.INTEGER(11),
        order_at: DataTypes.DATEONLY
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'orders'
    });
    return Order;
};