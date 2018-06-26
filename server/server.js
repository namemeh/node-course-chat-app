const path     = require('path');
const http     = require('http');
const express  = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');

const {generateMessage} = require('./utils/message');
console.log("start app server.js");
// console.log(__dirname + '/../public');
// console.log(publicPath);
const port = process.env.PORT || 3039;
var app = express();
var server = http.createServer(app);

var  io = socketIO(server);
app.use(express.static(publicPath));

// app.listen(port, () => {
//    console.log('Server index html up on port'+port);
// });

io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.emit('newMessage',generateMessage("Administrator","Welcome to the Chat app!"));
    socket.broadcast.emit('newMessage', generateMessage('Administrator',"New user joined"));
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
// emmitts event to single connection
/*socket.emit('newMessage',{
    from: 'Jhon',
    text: 'See you then',
    createdAt: 123
});
*/

socket.on('createMessage', (message,callback) => {
    console.log('createMessage is ', message);
    // io.emit emitts to every single connection
     io.emit('newMessage', generateMessage(message.from,message.text));
     callback('This is from server');

// send to everybody excpet one that created message
//    socket.broadcast.emit('newMessage', {
//            from: message.from,
//           text: message.text,
//           created: new Date().getTime()
//    });
});

socket.on('disconnect',() =>{
    console.log('User disconnected from server!');
    });

});

server.listen(port, () => {
    console.log('Server index html up on port'+port);
 });


