const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.end('Hello world!')
})

app.get('/home', function(req, res){
    res.end('Hello World!')
})

app.listen(process.argv[2])