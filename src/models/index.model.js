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
db.user = require('./main/user')(sequelize, Sequelize);
db.category = require('./main/category')(sequelize, Sequelize);
db.product = require('./main/product')(sequelize, Sequelize);
db.feature = require('./main/feature')(sequelize, Sequelize);
db.property = require('./main/property')(sequelize, Sequelize);

// Category Model O-M Product Model
db.category.hasMany(db.product, { as: 'product' });
db.product.belongsTo(db.category, {
   forginKey: 'categoryId',
   as: 'category',
});

// Product Model O-M Feature Model
db.product.hasMany(db.feature, { as: 'feature' });
db.feature.belongsTo(db.product, {
   forginKey: 'productId',
   as: 'product',
});

// Feature Model O-M Property Model
db.feature.hasMany(db.property, { as: 'property' });
db.property.belongsTo(db.feature, {
   forginKey: 'featureId',
   as: 'feature',
});

module.exports = db;
