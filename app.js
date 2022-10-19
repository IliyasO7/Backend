const path = require('path');

const express = require('express'); //importing express module

const app = express();  // using func of express to handling things for us or showing a way 

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const contactusRoutes = require('./routes/contactus');



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded()); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes); // filter as oer admin and enter only if there an admin //order matters or use correct protocols not (use)

app.use(shopRoutes);  //order matters

app.use(contactusRoutes);

app.use('/success', (req,res,next)=>{
    res.send(`Form successfully filled`);
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000); 

