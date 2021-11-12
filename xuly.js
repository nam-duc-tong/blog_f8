// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req,res) {
//     res.writeHead(200,{"Content-Type":"text/html"});
//     var data = fs.readFileSync(__dirname+"/index.html","utf-8");
//     data = data.replace("Tong Duc Nam","Tong Duc Nam la mot lap trinh vien chuyen nghiep trong tuong lai");
//     res.end(data);
// }).listen(7777);

// const { setServers } = require("dns/promises");

// =============================sending json response 
// var http = require("http");
// var server = http.createServer(function(req,res){
//     if(req.url=='/data'){
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.write(JSON.stringify({
//             name: "Tong Duc Nam",
//             age: 21,
//             job: "Lap trinh vien"
//         }));
//         res.end();
//     }
// });
// server.listen(5000);
// console.log('Nodejs web server at port 5000 is running...');

