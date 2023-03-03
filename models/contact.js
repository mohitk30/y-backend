const mongoose=require('mongoose')
const {contactConnection} = require('../dbConnection/dbconnect');

 

const contactSchema= new mongoose.Schema({
    
    contactAddedOn:{ type: Number ,default: () => new Date(+new Date() + 7*24*60*60*1000)},
    contactName:{type:String,required:true },
    contactNumber:{type:String,required:true },
    
  
     

},{collection:'contact'});

const model=contactConnection.model('ContactModel',contactSchema);
 
module.exports=model


 