var express = require('express');
var app = express();
var PORT = process.env.PORT | 3002;

app.listen(PORT, ()=>{
    console.log('listening to port :', PORT);
});