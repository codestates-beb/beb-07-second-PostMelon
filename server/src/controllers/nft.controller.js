
const Nft = require('../models/nft');
const jwt = require('jsonwebtoken');
const User = require('../models/user')


module.exports = {
  createNFT: async (req, res, next) => {
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    // console.log(req.body);
    

    try {
        const token = authorization.split(' ')[1];
        // console.log(token);
        const data = jwt.verify(token, process.env.ACCESS_SECRET);
        if(data){
            const { contract_address, name, description, image_link, price, creator, owner} = req.body;
    
           const newNFT = new Nft({
            contract_address,
            name,
            description,
            image_link,
            price,
            creator,
            owner
           })

           await newNFT.save();
           await User.updateOne({"_id":creator},{$push:{"created_nfts":newNFT._id}})
           await User.updateOne({"_id":owner},{$push:{"collected_nfts":newNFT._id}})
           return res.status(200).send('create NFT complete');
    } 
    }catch (err) {
      console.error(err.message);
      next(err);
    }
  },

  getAllNft: async (req, res, next) => {
    try {
      const nfts = await Nft.find({}).populate('creator', 'address nickname').populate('owner', 'address nickname'); //find. 이후 populate('writer') => UserSchema 읽기
      res.json(nfts);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  
  getNftDetail: async (req, res, next) => {
    try {
      const nft = await Nft.findById(req.params.nftid).populate(
        'creator',
        'address nickname'
      )
      .populate(
        'owner',
        'address nickname'
      ) 
      res.json(nft);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  sendNft: async (req, res, next)=>{
    const authorization = req.headers['authorization'];

    if (!authorization) {
      return res.status(400).json({ data: null, message: 'invalid access token' });
    }
    // console.log(req.body);
    
    try{
      const token = authorization.split(' ')[1];
      // console.log(token);
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      if(data){
        const {nftid, toAdress} = req.body;

      }

    }
    catch(err){
      console.error(err);
      next(err);
    }
  }

};
