const dotenv = require('dotenv');
dotenv.config();

const developmentConfig = {
   MYSQL_HOST: process.env.HOST,
   MYSQL_USER: process.env.USER,
   MYSQL_PASSWORD: process.env.PASSWORD,
   MYSQL_DB: process.env.DB,
   MYSQL_DIALECT: process.env.DIALECT,
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
   },
};

module.exports = developmentConfig;
