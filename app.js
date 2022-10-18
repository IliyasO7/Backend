

const express = require('express'); //importing express module




const app = express();  // using func of express to handling things for us or showing a way 

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded()); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.

app.use('/admin',adminRoutes); // filter as oer admin and enter only if there an admin //order matters or use correct protocols not (use)
app.use('/shop',shopRoutes);  //order matters

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})


app.listen(4000); 