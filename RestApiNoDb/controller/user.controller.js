const { v4: uuidv4 } = require('uuid');

const users = require("../model/user.model");

// USer get operation
 const getUser =(req,res)=>{
    try {
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message:'Internel Server error',error:error.message});
    }
};

// Single user get operation
const singleUser =(req,res)=>{
    try {
        const {userId} = req.params;
        const user = users.find((u)=>u.id===userId);
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({message:`user isn't found`});
        }
    } catch (error) {
        return res.status(500).json({message:'Internel Server error',error:error.message});
    }
};


// User add process
const addUser =(req,res)=>{
    try {
        const {name,mail,phone}=req.body;
        if (name && mail && phone) {
            const newUser = {
                id:uuidv4(),
                name:name,
                mail:mail,
                phone:phone
            };
            users.push(newUser);
            return res.status(201).json(users.reverse());
        }else{
            return res.status(404).json({message:`Name or mail or phone isn't define`});
        }
       
    } catch (error) {
        return res.status(500).json({message:'Internel Server error',error:error.message});
    }
};

// User update operaion
const updateUser =(req,res)=>{
    try {
        const {userId} = req.params;
        const user = users.find((u)=>u.id===userId);
        if (user) {
            const {name,mail,phone}=req.body;
            users.filter((user)=>user.id ===userId).map((user)=>{
                user.name=name,
                user.mail= mail,
                user.phone=phone
            });
            return res.status(200).json(users);
        } else {
            return res.status(404).json({message:`user isn't found`});
        }
    } catch (error) {
        return res.status(500).json({message:'Internel Server error',error:error.message});
    }
};

const deleteUser =(req,res)=>{
    try {
        const {userId} = req.params;
        const user = users.find((u)=>u.id===userId);
        if (user) {
           const existUsers= users.filter((user)=>user.id !== userId);
            return res.status(200).json(existUsers);
        } else {
            return res.status(404).json({message:`user isn't found`});
        }
    } catch (error) {
        return res.status(500).json({message:'Internel Server error',error:error.message});
    }
};

// const addUser =(req,res)=>{
//     try {
        
//     } catch (error) {
//         return res.status(500).json({message:'Internel Server error',error:error.message});
//     }
// };




module.exports ={getUser,singleUser,addUser,updateUser,deleteUser};