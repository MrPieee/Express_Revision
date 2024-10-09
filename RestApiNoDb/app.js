const express =require('express');
const cors =require('cors');
const userRoute = require('./router/user.route');


const app = express();

// Meddlewares call....-->
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// Home Route 

app.get('/',(req,res)=>{
    try {
        return res.status(200).sendFile(__dirname+'/view/index.html');
    } catch (error) {
        // return res.status(500).json({message:'Internel Server error'});
        console.log(error);
    }
});

// Server Routers ..--->

app.use('/api',userRoute);




module.exports= app;