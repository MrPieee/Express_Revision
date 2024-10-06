const express =require('express');
const app = express();



app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    try {
        res.status(200).send('Heyy Iam Express JS server');
    } catch (error) {
        res.status(200).json({message:error.message});
    }
});


app.get('/register',(req,res)=>{
    try {
        res.status(200).sendFile(__dirname+'/view/index.html');
    } catch (error) {
        res.status(200).json({message:error.message});
        
    }
});

app.post('/register',(req,res)=>{
    try {
        const name = req.body.name;
        const section = req.body.section;

        res.status(200).json({
            name:name,
            section:section
        });
    } catch (error) {
        res.status(200).json({message:error.message});
        
    }
});









module.exports =app;