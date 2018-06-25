const path     = require('path');
const http     = require('http');
const express  = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
console.log("start app server.js");
// console.log(__dirname + '/../public');
// console.log(publicPath);
const port = process.env.PORT || 3015;
var app = express();
var server = http.createServer(app);

var  io = socketIO(server);
app.use(express.static(publicPath));

// app.listen(port, () => {
//    console.log('Server index html up on port'+port);
// });


io.on('connection',(socket)=>{
    console.log('New user connected');

socket.on('disconnect',() =>{
    console.log('User disconnected from server!');
})
});
server.listen(port, () => {
    console.log('Server index html up on port'+port);
 });
