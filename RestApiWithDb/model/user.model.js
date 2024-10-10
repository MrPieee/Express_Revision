const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'name has been require']
    },
    mail:{
        type:String,
        require:[true,'name has been require']
    },
    phone:{
        type:Number,
        require:[true,'name has been require']
    },
    
},{timestamps:true});

const USER = mongoose.model('user',userSchema);

module.exports =USER;

