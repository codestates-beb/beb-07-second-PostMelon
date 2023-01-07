const express = require('express');
const devController = require('../controllers/dev.controller');
const devRouter = express.Router();

devRouter.get('/', devController.devHome);
devRouter.get('/user', devController.devUser);
devRouter.get('/user/:userid', devController.devUserDetail);
devRouter.get('/post', devController.devPost);
devRouter.get('/post/:postid', devController.devPostDetail);
devRouter.get('/nft', devController.devNft);
devRouter.get('/nft/:tokenId', devController.devNftDetail);
devRouter.post('/signup', devController.devSignUp);

module.exports = devRouter;
