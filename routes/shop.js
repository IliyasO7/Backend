const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get('/', (req, res, next)=>{
    
    res.sendFile(path.join(rootDir, 'views','shop.html')) // __dirname holds abs path on our os
   // __dirname goes into root folder which is routes
   //but shop.html is in sibling so '../' goes one step before the root
});


module.exports= router;