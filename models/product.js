const Sequelize = require('sequelize'); //requiring the package

const sequelize = require('../util/database'); //connection pool requireed thu sequalize

//defining models that would be managed by sequelize

const Product = sequelize.define('product',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Product;