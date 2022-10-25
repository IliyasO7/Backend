const path = require('path');


const express = require('express'); //importing express module
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database'); //pool that allows use to use connection to db


//importing models
const Product = require('./models/product');
const User = require('./models/user');


//const cors = require('cors');

const app = express();  // using func of express to handling things for us or showing a way 

//app.use(cors());

app.set('view engine', 'ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//const userRoutes = require('./routes/users');
//const expenseRoutes = require('./routes/expense');


const contactusRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');
//const { Server } = require('http');

//app.use(express.json())//instead of body parson json

app.use(bodyParser.urlencoded({ extended:false })); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{                           //for incoming req we will run this not for sequelize //sequelize would run only for one time at start to search 1 id. 
    User.findByPk(1).then(user =>{                     //just registers it as middleware doesnt run
        req.user = user;                     //storing user in a req object which is a sequelize object
        next();
    }).catch(err=>{              
        console.log(err);       
    })                                              
})                                                  

app.use('/admin',adminRoutes); // filter as per admin and enter only if there an admin //order matters or use correct protocols not (use)
app.use(shopRoutes);  //order matters

//app.use(userRoutes);

//app.use(expenseRoutes);

app.use(contactusRoutes);

app.use(successRoutes);

app.use(errorController.get404);


Product.belongsTo(User, { constraints : true, onDelete: 'CASCADE'})//user ke delete par product bhi delete hona chaiye
User.hasMany(Product);


//{force: true} when we want to drop and create a new table
sequelize.sync().then(result =>{
    //console.log('Server started at 4000');
    return User.findByPk(1);
}).then(user =>{
    if(!user){
        return User.create({
            name: 'Max',
            email: 'test@test.com'
        });
        return user;
    }
}).then(user=>{
    //console.log(user);
    app.listen(4000); 
})
.catch(err=>{
    console.log(err);
});                                                             //creates tables for models



