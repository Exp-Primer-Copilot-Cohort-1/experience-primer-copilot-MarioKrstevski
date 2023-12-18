// create a complete web server with node.js
// 1. create a server
// 2. create a router
// 3. create a request handler
// 4. map request handler to a route
// 5. start server and listen to incoming requests

// 1. create a server
var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
var path = require('path');

// 2. create a router
// 3. create a request handler
// 4. map request handler to a route
// 5. start server and listen to incoming requests
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    if (pathname === "/") {
        pathname = "index.html";
    }
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        res.end();
    });
}).listen(8080);
console.log("Server running at http://")



