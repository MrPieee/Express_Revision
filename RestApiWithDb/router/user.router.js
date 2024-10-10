const { getUsers, singleUser, addUser, updateUser, deleteUser } = require('../controller/user.controller');

const userRoute = require('express').Router();


userRoute.get('/users',getUsers);
userRoute.get('/user/:uId',singleUser);
userRoute.post('/user/add',addUser);
userRoute.patch('/user/update/:uId',updateUser);
userRoute.delete('/user/delete/:uId',deleteUser);



module.exports =userRoute;