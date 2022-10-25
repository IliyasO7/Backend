const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//cartts should hold differect carts for different Users.
const CartItem = sequelize.define('cartItem',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;

//cart belongs to  single user but multiple products.
