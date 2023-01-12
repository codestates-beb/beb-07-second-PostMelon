const express = require('express');
const nftRouter = express.Router();
const nftController = require('../controllers/nft.controller');

nftRouter.post('/create', nftController.createNFT);
nftRouter.get('/', nftController.getAllNft);
nftRouter.get('/:tokenid', nftController.getNftDetail);
nftRouter.put('/send', nftController.sendNft);


module.exports = nftRouter;
