const express = require('express');

const router = express.Router();

const userController = require('../../controllers/main/user');

router.route('/auth/login').get();

module.exports = router;
