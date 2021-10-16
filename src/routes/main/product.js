const express = require('express');
const router = express.Router();

const productController = require('../../controllers/main/product');
const { validateToken } = require('../../middlewares/auth');

// Create New Product
router.route('/products').post(validateToken, productController.createProduct);

// Get All Products
router.route('/products').get(validateToken, productController.getAllProducts);

// Get Single Product By Id
router
   .route('/products/:productId')
   .get(validateToken, productController.getSingleProduct);

// Update Single Product By Id
router
   .route('/products/:productId')
   .put(validateToken, productController.updateSingleProduct);

// Delete Single Product By Id
router
   .route('/products/:productId')
   .delete(validateToken, productController.deleteSingleProduct);

module.exports = router;
