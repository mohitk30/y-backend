require("dotenv").config();
const express = require('express')
const port = process.env.PORT || 7000  ;  
const app = express();
const bodyParser = require('body-parser');
 
const cors = require('cors')

 

//routes

const authRoutes=require('./routes/auth')
const contactRoutes=require('./routes/contact')
 
 



app.use(cors());  
app.use(express.json({limit: '50mb'})); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', async(req, res) => {
    res.send("This is up and running server. ")
})



app.listen(port, (err) => {
    if (err)
        console.log('There is an error in running');

    console.log(`Yellow server is running at ${port}`); 
}) 


app.use("/v1/auth", authRoutes)
app.use("/v1/contact", contactRoutes)
