const path = require('path');

const express = require('express');

const productsController = require('../controllers/product');

const router = express.Router(); //mini express app linked on oter express apps

//admin -get
router.get('/add-product',productsController.getAddProduct);

//admin - post
router.post('/add-product',productsController.postAddProduct);


module.exports = router;