const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
console.log("start app server.js");
// console.log(__dirname + '/../public');
// console.log(publicPath);

const port = process.env.PORT || 3001;
var app = express();
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('Server index html up');
})