const express = require("express")
const router = express.Router() 
const ContactModel=require('../../models/contact') 



// Contact  Routes Related 

router.get('/all', async (req, res) => { 
     
    try{
     const allContact=await ContactModel.find({});
        res.send({contacts:allContact,status:'200',message:'Contact Found'});

   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with Contact data.'});

   }
})

 
// add contact 
 
router.post('/add', async (req, res) => { 
     
    try{
        const contactData=req.body;
        const result= await ContactModel.create({contactName:contactData.contactName,contactNumber:contactData.contactNumber});
        res.send( {status:'200',message:'Contact added.'} );
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with Contact data.'});

   }
})
 

// update contact

router.post('/update', async (req, res) => { 
     
    try{
        const contactData=req.body;
        const result= await ContactModel.findOneAndUpdate({_id:contactData.id},{
          contactName: contactData.contactName,
          contactNumber:contactData.contactNumber,
            
        });
        res.send( {blog:result,status:'200',message:'Contact Updated.'} );
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with Contact data.'});

   } 
})



// delete contact


router.post('/delete', async (req, res) => { 
     
    try{
        const contactData=req.body;
        const result= await ContactModel.findOneAndDelete({_id:contactData.id});
        if(result!=null){
           res.send( {contacts:result,status:'200',message:'Contact Deleted.'} );
        }else{
            res.send( { status:'404',message:'No Contact found to delete.'} );
        }
   }catch (error) { 
        console.log(error)
        res.send({status:'404',message:'Something wrong with contact data.'});

   }
})




module.exports = router