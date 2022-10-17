const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;


    if(url === "/")
    {
        //res.setHeader('Content-Type', 'text/html'); // telling the browser that response is a html code
        fs.readFile("message.txt", { encoding: "utf-8" }, (err, data)=>{
            if(err)
            {
                console.log(err);
            }
            console.log(`data from file: `+ data);
            res.write('<html>');
            res.write('<head><title>"Enter a message"</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="messages"><button type="submit">send</button></form></body>');
            res.write('</html>');
            return res.end();
        })
        
        
    }
    if(url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{    // 'data' gets fired up for each of the incoming data request simiar to incoming server requests as in http create ser(res,res)=>{}
            console.log(chunk);      //whenever a data request is incoming it pushes it into an array  and then we are creating
            body.push(chunk);             // a buffer to work on it in another event listener which if for 'end' which concatsall teh data parsed to it.
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) =>{
                if(err)
                {
                    console.log(err);
                }
            res.statusCode = 302;                      //code for writing in  a file
            res.setHeader('Location','/');            // resetting back to where it was called   
            return res.end()
            });
        })
        
    }
   /* else
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server! </h1></body>');
        res.write('</html>');
        res.end();

    }*/
    
   
    
   
});


server.listen(4000);