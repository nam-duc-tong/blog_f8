// var http = require('http');
// var server = http.createServer(function(req,res){
//     if(req.url=="/"){
//         //check the url of the current resquest
        
//         //set response header
//         res.writeHead(200,{'Content-Type':'text/html'});
//         // set response Content
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
//     }
//     else if(req.url=="/student"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is Student Page.</p></body></html>');
//         res.end();
//     }
//     else if(req.url=="/admin"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();
//     }
//     else{
//         res.end("Invalid Request");
//     }
// });
// server.listen(5000);
// console.log('Node.js web server at port 5000 is running...');


var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if(req.url=="/student"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    }
    else if(req.url =="/admin"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else
    res.end('Invalid Request!');
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running...');




