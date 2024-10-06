const express = require('express');
const app =express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    try {
        return res.status(200).sendFile(__dirname+'/view/index.html');
    } catch (error) {
        return  res.status(500).json({message:error.message});
    }
});

app.get('/tringle',(req,res)=>{
    try {
        return  res.status(200).sendFile(__dirname+'/view/tringle.html');
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
});

app.get('/trapezium',(req,res)=>{
    try {
        return  res.status(200).sendFile(__dirname+'/view/trapezium.html');
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
});

app.get('/circle',(req,res)=>{
    try {
        return  res.status(200).sendFile(__dirname+'/view/circle.html');
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
});

app.post('/circle',(req,res)=>{
    try {
        const {radius} =req.body;
        const sum = radius*Math.PI;
        const result = Math.round(sum);

        return res.status(200).send(`<a href="/">Back</a> <h1>The Circle Area Result is == ${result} squremeter</h1>`);
    } catch (error) {
       return res.status(500).json({message:error.message});
    }
});

app.post('/tringle',(req,res)=>{
    try {
        const {land,height} =req.body;
        const sum = 0.5 * land * height;
        const result = Math.round(sum);

        return res.status(200).send(`<a href="/">Back</a> <h1>The Tringle Area Result is == ${result} squremeter</h1>`);
    } catch (error) {
       return res.status(500).json({message:error.message});
    }
});

app.post('/trapezium',(req,res)=>{
    try {
        const {width,length,height} =req.body;
        const wl = width+length;
        const sum = 0.5 * wl * height;
        const result = Math.round(sum);

        return res.status(200).send(`<a href="/">Back</a> <h1>The Trapezium Area Result is == ${result} squremeter</h1>`);
    } catch (error) {
       return res.status(500).json({message:error.message});
    }
});





module.exports= app;