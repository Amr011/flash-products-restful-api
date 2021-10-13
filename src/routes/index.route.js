const express = require('express');
const router = express.Router();

const productController = require('../controllers/main/product');

// Create New Product
router.route('/products').post();

// Get All Products
router.route('/products').get();

// Get Single Product By Id
router.route('/products/:productId').get();

// Update Single Product By Id
router.route('/products/:productId').put();

// Delete Single Product By Id
router.route('/products/:productId').delete();

// Get All Categories
router.route('/categories').get();

// Get All Products By CategoryId
router.route('/categories/:categoryId/products').get();

// Get All Product By Category Id
router.route('/categories/:categoryId').delete();

module.exports = router;
