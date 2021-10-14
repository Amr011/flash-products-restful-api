const express = require('express');

const router = express.Router();

const userController = require('../../controllers/main/user');

router.route('/auth/login').post(userController.userLogin);

module.exports = router;
