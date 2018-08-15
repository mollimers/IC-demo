import { request } from "https";

const http = require('http');

const server = http.createServer(function (request, response) {
    console.log(request.url);

    if ( request.url == '/' ) {
        return response.end('Pimp My Rect'); //write a responseponse to the client
    }
    else if ( request.url == '/gallery' ) {
        return response.end('Div Gallery'); //write a responseponse to the client
    }
    else {
        response.writeHead(404);
        return response.end('WAT!?! a 404?'); //write a responseponse to the client
    }
}).listen(8080);

//server.listen(8080);
//create a server object:
/* http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var h = document.createElement("H1");
    var t = document.createTextNode("Pimp My Rect");
    h.appendChild(t);
    response.write('Pimp My Rect'); //write a responseponse to the client
    response.end(); //end the responseponse
}).listen(8080); //the server object listens on port 8080 */