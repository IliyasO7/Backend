const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router(); //mini express app linked on oter express apps


router.get('/add-product', (req, res, next)=>{
    //when user hit on add product url a form is displayed which on submitting redirects to '/product' and post data in it url
    res.sendFile(path.join(rootDir, 'views','add-product.html'));
   
});
//app.post will only filter for post req and wont enter for get req
router.post('/add-product', (req,res,next)=>{
    console.log(req.body);  // (req) it doesnt parse the body so we need a body parser
    res.redirect('/');      //redirecting '/' to this url
})


module.exports = router;