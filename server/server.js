const path     = require('path');
const http     = require('http');
const express  = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
console.log("start app server.js");
// console.log(__dirname + '/../public');
// console.log(publicPath);
const port = process.env.PORT || 3020;
var app = express();
var server = http.createServer(app);

var  io = socketIO(server);
app.use(express.static(publicPath));

// app.listen(port, () => {
//    console.log('Server index html up on port'+port);
// });

io.on('connection',(socket)=>{
    console.log('New user connected');
/*
    socket.emit('newEmail',{
        from: 'mike@example.com',
        text: 'Hey. What is going on.',
        createdAt: 123
    });
*/
/*
    socket.on('createEmail', (newEmailData) => {
        console.log('createEmail is ', newEmailData);
    });

    */
socket.emit('newMessage',{
    from: 'Jhon',
    text: 'See you then',
    createdAt: 123
});


socket.on('createMessage', (data) => {
    console.log('createMessage is ', data);
});






socket.on('disconnect',() =>{
    console.log('User disconnected from server!');
    });

});

server.listen(port, () => {
    console.log('Server index html up on port'+port);
 });


