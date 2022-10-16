const http = require('http');
/*
function rqListener(req, res){

}*/


//http.createServer(rqListener);
/*Based on the url the user hits , I want you to return custom responses.
When url = /home , return response ==> Welcome home
When url = /about, return response ==> Welcome to About Us page
When url =/node, return response ==> Welcome to my Node Js project*/

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //console.log("ILiyas");

    if(req.url == '/home')
    {
        res.setHeader('Content-Type', 'text/html'); // telling the browser that response is a html code
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><h1>Welcome home </h1></body>');
        res.write('</html>');
        res.end();

    }
    else if(req.url == '/about')
    {
        res.setHeader('Content-Type', 'text/html'); // telling the browser that response is a html code
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><h1>Welcome to About us page</h1></body>');
        res.write('</html>');
        res.end();

    }
    else if(req.url == '/node')
    {
        res.setHeader('Content-Type', 'text/html'); // telling the browser that response is a html code
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><h1>Welcome to my Node.js Project</h1></body>');
        res.write('</html>');
        res.end();

    }
    
    /*
    res.setHeader('Content-Type', 'text/html'); // telling the browser that response is a html code
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1> Hello from my Node.js server </h1></body>');
    res.write('</html>');
    res.end();*/

});


server.listen(4000);
 
