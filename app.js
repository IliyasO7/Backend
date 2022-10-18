

const express = require('express'); //importing express module

const fs = require('fs');


const app = express();  // using func of express to handling things for us or showing a way 

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded()); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.
//not needed
//app.use('/admin',adminRoutes); // filter as oer admin and enter only if there an admin //order matters or use correct protocols not (use)
//app.use('/shop',shopRoutes);  //order matters
//not needed
app.get("/", (req,res)=>{
    fs.readFile('username.txt', (err, data)=>{
        if(err){
            console.log(err)
            data = 'No chat exists'
        }
        res.send(
            `${data} <form action="/" onsubmit="document.getElementById('username').value= localStorage.getItem('username')" method="POST">
                 <input id="message" name="message" type="text">
                 <input type="hidden" name="username" id="username">
                 <br />
                 <button type="submit">send</button>
            </form>`
        );
    })

    

 })

 app.post("/", (req,res)=>{
   
    console.log(req.body.username);
    console.log(req.body.message);

    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>
        err ? console.log(err):res.redirect("/")
        );
    
 });

 app.get("/login",(req,res)=>{
    res.send(`<form action="/" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
   <input id="username" placeHolder="username" type="text" name="username">
   <br />
   <button type="submit">login</button></form>`);
 })



app.listen(4000); 

/*
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})*/


