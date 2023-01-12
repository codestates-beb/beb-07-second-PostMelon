const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/:userid', userController.getUserDetail);
userRouter.get('/faucet/:userid', userController.getEth);
userRouter.post('/sendtoken', userController.sendToken);
userRouter.get('/list', userController.getAllUser);

module.exports = userRouter;
