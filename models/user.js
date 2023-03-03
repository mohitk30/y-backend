const mongoose=require('mongoose')
const {contactConnection} = require('../dbConnection/dbconnect');

 

const userSchema= new mongoose.Schema({
    
    userAddedOn:{ type: Number ,default: () => new Date(+new Date() + 7*24*60*60*1000)},
    email:{type:String,required:true },
    password:{type:String,required:true },
     

},{collection:'users'});

const model=contactConnection.model('UserModel',userSchema);

module.exports=model


 