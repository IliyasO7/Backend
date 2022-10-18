// [1]cmnt   const http = require('http'); //importing core module

const express = require('express'); //importing express module

const bodyParser = require('body-parser');
const app = express();  // using func of express to handling things for us or showing a way 

app.use(bodyParser.urlencoded()); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.

app.use('/add-product', (req, res, next)=>{
    //when user hit on add product url a form is displayed which on submitting redirects to '/product' and post data in it url
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Products</button></form>'); // Express auto. sets header for us
   
});
//app.post will only filter for post req and wont enter for get req
app.post('/product', (req,res,next)=>{
    console.log(req.body);  // (req) it doesnt parse the body so we need a body parser
    res.redirect('/');      //redirecting '/' to this url
})

app.use('/', (req, res, next)=>{
    
    res.send('<h1>Hello from Express!</h1>'); // Express auto. sets header for us
    //res.send( { "key1": "value" }) 
});

//[2]cmnt const server = http.createServer(app); //

//[3]cmnt server.listen(4000);

app.listen(4000); // creates http server and keep on listening see 1-2-3 cmnts