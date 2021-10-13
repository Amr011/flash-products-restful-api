// Server Setup
const express = require('express');
const app = express();

// Middlwares Configuration
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// config cookieParesr for cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Logging In Development Mode
const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

// config dotenv for reading .env files
const dotenv = require('dotenv');
dotenv.config();

// Database Configuerations
const db = require('./src/models/index.model');
db.sequelize.sync();

// Recepion API
app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Welcome To This API, Have Fun 😘',
    author: 'Amr Aboras',
  });
});

// Unavailable Request
app.use((req, res) => {
  res.status(404).json({
    error: 'This Request Is Not Available !!',
  });
});

// Server Listening
const port = process.env.PORT || 2021;
app.listen(port, () => {
  console.log(`Server is successfully running on port : ${port}`);
});
