
const express = require('express');

const fs = require('fs');
const app = express();
app.use(express.json());


const db = JSON.parse(fs.readFileSync('./db.json','utf-8'));
app.post('/first',(req, res) =>{
   
    
    const user = req.body;
    const userExists = db.users.some(existentUser=>existentUser.nombre === user.nombre);
    if(userExists){

        res.send("el usuario ya existe");
        return
    }
    

    db.users.push(user);

    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    
    res.send(db)
    
});

 app.get('/first',(req, res) =>{ 
    
    
    res.json(db);

});

app.listen(3000, () => console.log("listening in localhost:3000"));