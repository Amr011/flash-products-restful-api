const express = require('express');

const router = express.Router();

const categoryController = require('../../controllers/main/category');

// Get All Categories
router.route('/categories').get(categoryController.getAllCategories);

// Get All Products By CategoryId
router
   .route('/categories/:categoryId/products')
   .get(categoryController.getAllProductByCategoryId);

// Get All Product By Category Id
router
   .route('/categories/:categoryId')
   .delete(categoryController.deleteSingleCategory);

module.exports = router;
