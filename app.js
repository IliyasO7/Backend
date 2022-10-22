const path = require('path');

const express = require('express'); //importing express module
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database'); //pool that allows use to use connection to db

const app = express();  // using func of express to handling things for us or showing a way 

app.set('view engine', 'ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



const contactusRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({ extended:false })); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes); // filter as per admin and enter only if there an admin //order matters or use correct protocols not (use)

app.use(shopRoutes);  //order matters

app.use(contactusRoutes);

app.use(successRoutes);

app.use(errorController.get404);

sequelize.sync().then(result =>{
    //console.log(result);
    app.listen(4000); 
}).catch(err=>{
    console.log(err);
});                                                              //creates tables for models



