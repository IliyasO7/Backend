const path = require('path');


const express = require('express'); //importing express module

const dotenv = require('dotenv');

dotenv.config();




const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const sequelize = require('./util/database'); //pool that allows use to use connection to db


//importing models
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');


const cors = require('cors');

const app = express();  // using func of express to handling things for us or showing a way 


app.use(cors());

app.set('view engine', 'ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/users');




app.use(express.json())//instead of body parson json

//app.use(bodyParser.urlencoded({ extended:false })); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.
app.use(express.static(path.join(__dirname,'public')));




app.use((req, res, next) => {
    User.findByPk(1)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });
  



app.use('/admin',adminRoutes); // filter as per admin and enter only if there an admin //order matters or use correct protocols not (use)
app.use(shopRoutes);  //order matters

app.use(userRoutes);

app.use(errorController.get404);



Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });






//use force for 1st time
//{force: true} when we want to drop and create a new table

sequelize
  //.sync({ force: true })
  .sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Max', email: 'test@test.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    return user.createCart();
  })
  .then(cart => {
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });                                                            

