const http = require('http');
/*
function rqListener(req, res){

}*/


//http.createServer(rqListener);

const server = http.createServer((req, res) => {
    console.log(req);
    console.log("ILiyas");
});


server.listen(4000);
