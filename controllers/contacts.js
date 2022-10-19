const path = require('path');



const rootDir = require('../util/path');

exports.getcontactcontroller = (req,res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))
}

exports.postcontactController = (req,res,next)=>{
    res.redirect('/');
}
