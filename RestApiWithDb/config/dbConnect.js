const mongoose =require('mongoose');
require('dotenv').config();

const DBURL=process.env.DB_URL;

const DB_CONNECT = async()=>{
    try {
        await mongoose.connect(DBURL).then(()=>{
            console.log(`DB HAS BEEN CONNECTED`);
        }).catch((error)=>console.log(error.message));
    } catch (error) {
        console.log({message:error.message});
    }
};

module.exports =DB_CONNECT;