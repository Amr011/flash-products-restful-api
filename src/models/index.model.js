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
db.product = require('./main/product')(sequelize, Sequelize);
db.category = require('./main/category')(sequelize, Sequelize);
db.user = require('./main/user')(sequelize, Sequelize);

db.category.hasMany(db.product, { as: 'product' });
db.product.belongsTo(db.category, {
   forginKey: 'categoryId',
   as: 'category',
});

module.exports = db;
