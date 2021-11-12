// // var http = require('http');
// // var server = http.createServer(function(req,res){
// //     if(req.url=="/"){
// //         //check the url of the current resquest
        
// //         //set response header
// //         res.writeHead(200,{'Content-Type':'text/html'});
// //         // set response Content
// //         res.write('<html><body><p>This is home Page.</p></body></html>');
// //         res.end();
// //     }
// //     else if(req.url=="/student"){
// //         res.writeHead(200,{'Content-Type':'text/html'});
// //         res.write('<html><body><p>This is Student Page.</p></body></html>');
// //         res.end();
// //     }
// //     else if(req.url=="/admin"){
// //         res.writeHead(200,{'Content-Type':'text/html'});
// //         res.write('<html><body><p>This is admin Page.</p></body></html>');
// //         res.end();
// //     }
// //     else{
// //         res.end("Invalid Request");
// //     }
// // });
// // server.listen(5000);
// // console.log('Node.js web server at port 5000 is running...');


// var http = require('http');
// var server = http.createServer(function(req,res){
//     if(req.url=="/"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
//     }
//     else if(req.url=="/student"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is student Page.</p></body></html>');
//         res.end();
//     }
//     else if(req.url =="/admin"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();
//     }
//     else
//     res.end('Invalid Request!');
// });
// server.listen(5000);
// console.log('Node.js web server at port 5000 is running...');




// var http = require('http');
// var server = http.createServer(function(req,res){
//     if(req.url=='/'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is home Page.</p></body></html>');
//         res.end();
//     }
//     else if(req.url=="/student"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is student Page.</p></body></html>');
//         res.end();
//     }
//     else if(req.url == "/admin"){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<html><body><p>This is admin Page.</p></body></html>');
//         res.end();
//     }
//     else{
//         res.end('Invalid Request');
//     }
// });
// server.listen(5000);
// console.log('Node.js web server at port 5000 is running..');


//doc du lieu tu file index.html..

// var http = require('http');
// var fs = require('fs');
// const { Http2ServerRequest } = require('http2');

// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type": "text/html"});
//     var data = fs.readFileSync(__dirname+"/index.html","utf-8");
//     // data = JSON.stringify(data)
//     data = data.replace("Tong Duc Nam","Tong Duc Nam La mot lap trinh vien trong tuong lai");
//     res.end(data);
// }).listen(2000);

var http = require("http");
var replaceStream = require('replacestream')
    , fs = require('fs')
    , path = require('path');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    var data = fs.createReadStream(__dirname+"/index.html").pipe(replaceStream("Tong Duc Nam","Lap trinh vien")).pipe(res);
    // data = JSON.stringify(data);
    // data.toString();
    // data = data.;
    // res.end(data);
    // console.log(data.toString());
}).listen(2000);