const express = require('express');

const path = require('path');

const rootDir = require('../util/path');


const router = express.Router();


const successController = require('../controllers/success.js');

router.use('/success', successController.getSuccess);

module.exports = router;