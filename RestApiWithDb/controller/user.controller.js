const USER = require("../model/user.model");


const getUsers =async(req,res)=>{
    try {
        const allUsers = await USER.find();
        if (allUsers) {
            return res.status(200).json(allUsers);
        } else {
            return res.status(404).json({message:'Data Not found'});
        }
    } catch (error) {
        return res.status(500).json({message:'Internel server error',error:error.message});
    }
};

const singleUser =async(req,res)=>{
    try {
        const {uId} =req.params;
        const user = await USER.findOne({_id:uId});
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({message:'User Not found'});
        }
    } catch (error) {
        return res.status(500).json({message:'Internel server error',error:error.message});
    }
};

const addUser =async(req,res)=>{
    try {
        const {name,mail,phone}=req.body;
        if (name && mail && phone) {
            const newUser = new USER({
                name:name,
                mail:mail,
                phone :Number(phone)
            });
            await newUser.save();
            return res.status(201).json({message:'User created',newUser});
        } else {
            return res.status(404).json({message:'name/mail/phone not found'});
        }


    } catch (error) {
        return res.status(500).json({message:'Internel server error',error:error.message});
    }
};

const updateUser =async(req,res)=>{
    try {
        const {uId}=req.params;
        const user=await USER.findById(uId);
        if(user){
            const {name,mail,phone}=req.body;
            const userUpdate =await USER.findByIdAndUpdate(uId,{
             $set:{
                 name:name,
                 mail:mail,
                 phone:Number(phone)
             }
            },{timestamps:true});
            return res.status(200).json({message:'User Update',user:userUpdate});
        }else{
            return res.status(404).json({message:'user not found'});
        }
           
    } catch (error) {
        return res.status(500).json({message:'Internel server error',error:error.message});
    }
};

const deleteUser =async(req,res)=>{
    try {
        const {uId}=req.params;
        const user=await USER.findById(uId);
        if(user){
            const deleteuser =await USER.findByIdAndDelete(uId);
            return res.status(200).json({message:'User Deleted'});
        }else{
            return res.status(404).json({message:'user not found'});
        }
    } catch (error) {
        return res.status(500).json({message:'Internel server error',error:error.message});
    }
};






module.exports ={getUsers,singleUser, addUser,updateUser,deleteUser};