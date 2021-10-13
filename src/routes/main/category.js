const express = require('express');

const router = express.Router();

const categoryController = require('../../controllers/main/category');

// Get All Categories
router.route('/categories').get();

// Get All Products By CategoryId
router.route('/categories/:categoryId/products').get();

// Get All Product By Category Id
router.route('/categories/:categoryId').delete();

module.exports = router;
