const express = require('express');
const router = express.Router();

const productController = require('../../controllers/main/product');

// Create New Product
router.route('/products').post();

// Get All Products
router.route('/products').get(productController.getAllProducts);

// Get Single Product By Id
router.route('/products/:productId').get(productController.getSingleProduct);

// Update Single Product By Id
router.route('/products/:productId').put(productController.updateSingleProduct);

// Delete Single Product By Id
router
   .route('/products/:productId')
   .delete(productController.deleteSingleProduct);

module.exports = router;
