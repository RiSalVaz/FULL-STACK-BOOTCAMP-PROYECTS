const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const UserSchema = mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true
    },
    password: String
})

UserSchema.methods.comparePassword=function(params){
    const user = this;
    console.log(user)
    return bcrypt.compare(password, user.password)
}

UserSchema.pre('save', function (next){//mongoose middlewware que se ejetuta antes del save(), utilizamos es5 functions
//porque queremos el this para acceder a la instancia

    const user=this;
    console.log(salt);
    const hash = bcrypt.hash(user.password, salt).then(hash=>{
        console.log(hash)
        user.password = hash;
        console.log(user)
        next();
    })
    .catch(error=>{
        console.log(error)
        resizeBy.status(500).send(error);
    });
    
    
    
})
const UserModel = mongoose.model('user',UserSchema);
module.exports=UserModel;