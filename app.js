// [1]cmnt   const http = require('http'); //importing core module

const express = require('express'); //importing express module

const app = express();  // using func of express to handling things for us or showing a way

app.use((req, res, next)=>{
    console.log('Into the midlle ware');
    next();            //reach next middle ware

}); //creating midlleware for incoming request a funnel

app.use((req, res, next)=>{
    console.log('Into the 2nd midlle ware');
    res.send('<h1>Hello from Express!</h1>'); // Express auto. sets header for us
    //res.send( { "key1": "value" }) 


});

//[2]cmnt const server = http.createServer(app); //

//[3]cmnt server.listen(4000);

app.listen(4000); // creates http server and keep on listening see 1-2-3 cmnts