const express= require('express');
const cors =require('cors');
const userRoute = require('./router/user.router');
const app =express();

// Middleware functions call
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// Home route decleare
app.get('/',(req,res)=>{
    try {
        return res.status(200).sendFile(__dirname+'/view/index.html');
    } catch (error) {
        
        return res.status(500).json({message:'Internel server error',error:error.message});
    }
});


// APP route 
app.use('/api',userRoute);


// ERROR route decleare
app.use((req,res,next)=>{
    return res.status(404).json({message:'Route not found'});
});



module.exports=app;