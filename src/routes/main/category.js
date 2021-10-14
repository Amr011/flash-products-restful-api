const express = require('express');

const router = express.Router();

const categoryController = require('../../controllers/main/category');
const { validateToken } = require('../../middlewares/auth');

// Get All Categories
router
   .route('/categories')
   .get(validateToken, categoryController.getAllCategories);

// Get All Products By CategoryId
router
   .route('/categories/:categoryId/products')
   .get(validateToken, categoryController.getAllProductByCategoryId);

// Get All Product By Category Id
router
   .route('/categories/:categoryId')
   .delete(validateToken, categoryController.deleteSingleCategory);

module.exports = router;
