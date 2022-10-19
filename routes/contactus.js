
const path = require('path');
const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contacts');


router.get('/contactus', contactController.getcontactcontroller);

router.post('/contactus',contactController.postcontactController );


module.exports= router;