const express = require('express');
const router = express.Router();

// Import Product Router
const productRouter = require('./main/product');
router.use(productRouter);

// Import Category Router
const categoryRouter = require('./main/category');
router.use(categoryRouter);

// Import User Router
const userRouter = require('./main/user');
router.use(userRouter);

module.exports = router;
