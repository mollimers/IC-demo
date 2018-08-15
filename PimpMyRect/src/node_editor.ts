const express = require('express');
const app = new express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(8080, () => {
    console.log("App listening on port 8080");
})

/* import { request } from "https";

const http = require('http');
const fs = require('fs');

const divsGallore = fs.readFileSync('divsGalore.html');
const editor = fs.readFileSync('editor.js');
const edCss = fs.readFileSync('editor.css');

const server = http.createServer(function (request, response) {
    console.log(request.url);

    if ( request.url == '/' ) {

        return response.end(editor); //write a responseponse to the client
    }
    else if ( request.url == '/gallery' ) {
        return response.end('Div Gallery'); //write a responseponse to the client
    }
    else {
        response.writeHead(404);
        return response.end('WAT!?! a 404?'); //write a responseponse to the client
    }
}).listen(8080); */