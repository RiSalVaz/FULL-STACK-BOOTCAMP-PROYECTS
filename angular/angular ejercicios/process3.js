const express = require('express')
const app = express()
const date= new Date().toDateString();

app get('/home', function(req,res){
    res.send('')
})
app.set('views',argv[2])