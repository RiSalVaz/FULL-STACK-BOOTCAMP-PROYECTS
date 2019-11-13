//Importar Dependencias

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const api = express();

// API REST tipo JSON
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

api.get('/', (req, res) => {
    res.send(`hola, estoy en '/'`)
});

api.get('/character', (req, res) => {
    fs.readFile('./db/character.json', 'utf8', (err, data) =>{
        if (err){
            console.log(err);
            throw err;
        }

        res.send(JSON.parse(data));
    })
})

api.get('/episode', (req, res) => {
    fs.readFile('./db/episode.json', 'utf8', (err, data) =>{
        if (err){
            console.log(err);
            throw err;
        }

        res.send(JSON.parse(data));
    })
})

api.get('/location', (req, res) =>{
    fs.readFile('./db/location.json','utf8', (err, data) =>{
        if (err){
            console.log(err);
            throw err;
        }
        res.send(JSON.parse(data))
    })
})

const server = api.listen(3001,() => {
    console.log('API connect to port 3001')
});