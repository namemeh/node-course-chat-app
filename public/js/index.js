var socket = io();
socket.on('connect', ()=> {
    console.log('Connected to server');

/*
    socket.emit('createEmail',{
        to: 'zuhra@example.com',
        text: 'Di si!',
    });
    */

/*
socket.emit('createMessage',{
    from: 'Andrew',
    text: 'Yup,that works for me!',
});
*/
});


socket.on('disconnect',() => {
    console.log('Disconnected from server!');
});

/*
socket.on('newEmail',(data) =>{
   console.log('New Email', data);
});
*/
socket.on('newMessage',(data) =>{
    console.log('New Message', data);
    var li = jQuery('<li></li>');
    li.text(`${data.from} : ${data.text}`);
    jQuery('#messages').append(li);

});
/*
socket.emit('createMessage',{
    from: 'Frank',
    text: 'Hi',
},function(data) {
    console.log("Got it!",data);
});
*/

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();

    socket.emit('createMessage',{
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function(){

    });
});