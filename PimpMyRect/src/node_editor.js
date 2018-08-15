"use strict";
exports.__esModule = true;
var http = require('http');
var fs = require('fs');
var editor = fs.readFileSync('divsGalore.html');
var server = http.createServer(function (request, response) {
    console.log(request.url);
    if (request.url == '/') {
        return response.end(editor); //write a responseponse to the client
    }
    else if (request.url == '/gallery') {
        return response.end('Div Gallery'); //write a responseponse to the client
    }
    else {
        response.writeHead(404);
        return response.end('WAT!?! a 404?'); //write a responseponse to the client
    }
}).listen(8080);
