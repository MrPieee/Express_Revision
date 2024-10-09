const { getUser, addUser, updateUser, deleteUser, singleUser } = require('../controller/user.controller');

const userRoute =require('express').Router();


userRoute.get('/users',getUser);
userRoute.get('/users/:userId',singleUser);
userRoute.post('/user/add',addUser);
userRoute.patch('/user/update/:userId',updateUser);
userRoute.delete('/user/delete/:userId',deleteUser);




module.exports= userRoute;