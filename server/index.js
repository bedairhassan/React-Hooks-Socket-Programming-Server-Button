// WARNING : when importing from github, don't forget to {npm i} this folder

var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// server rules 
// first parameter : object sent by the socket itself
// second parameter : instructions used and seen only by index.js

// server functions


// Server Variables


// Socket setup & pass server
var io = socket(server);
io.on('connection', socket => {

    socket.on(`hello world`,data=>socket.emit(`hello world`,`server: ${data}`))
});
