const developmentConfig = require('../config/db.config.js');

// Setup MySql Connection Using Sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  developmentConfig.DB,
  developmentConfig.USER,
  developmentConfig.PASSWORD,
  {
    host: developmentConfig.HOST,
    dialect: developmentConfig.DIALECT,
    logging: false,
    pool: {
      max: developmentConfig.pool.max,
      min: developmentConfig.pool.min,
      acquire: developmentConfig.pool.acquire,
      idle: developmentConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/* Database */

module.exports = db;
