const dotenv = require('dotenv');
dotenv.config();

const developmentConfig = {
   HOST: process.env.MYSQL_HOST,
   USER: process.env.MYSQL_USER,
   PASSWORD: process.env.MYSQL_PASSWORD,
   DB: process.env.MYSQL_DB,
   DIALECT: process.env.MYSQL_DIALECT,
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
   },
};

module.exports = developmentConfig;
