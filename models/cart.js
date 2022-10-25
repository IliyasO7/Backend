const Sequelize = require('sequelize');

const sequelize = require('../util/database');


//cartts should hold differect carts for different Users.
const Cart = sequelize.define('cart',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Cart;

//cart belongs to  single user but multiple products.
