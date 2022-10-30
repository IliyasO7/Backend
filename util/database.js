const Sequelize = require('sequelize');



const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST
    });

    //connecting sequelize to db create connection pool



   
module.exports = sequelize;



