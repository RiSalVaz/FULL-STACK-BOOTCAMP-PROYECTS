const express = require('express');
const app = express();
const fs = require('fs')

app.use(express.json());

app.get('/ping', (req, res) =>{
        res.send({mesage: "pong"});
})

app.post('/user', (req, res)=>{

        console.log(req.body);
        res.json(req.body);
})
app.post('/register', (req, res)=>{

        const user = req.body;
        
        const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        
        const userExists = db.users.find(_user => _user.email === user.email)
        if (userExists){
                return res.status(400).json({message:`email ${user.email} already exists`});
        }

        
        
        db.users.push(user);
        
        fs.writeFileSync('./db.json', JSON.stringify(db));
        
        console.log(db);
        
        res.status(200).json(db);
})

app.post('/login', (req, res)=>{

        console.log(req.body);
        res.json(req.body);
})

app.listen(3000);