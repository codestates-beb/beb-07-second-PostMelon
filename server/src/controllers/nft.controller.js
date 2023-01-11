
const Nft = require('../models/nft');
const jwt = require('jsonwebtoken');


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
            const { contract_address, name, image_link, price, creator, owner} = req.body;
    
           const newNFT = new Nft({
            contract_address,
            name,
            image_link,
            price,
            creator,
            owner
           })

           await newNFT.save();
           await User.updateOne({"_id":creator},{$push:{"created_nfts":newNFT._id}})
           await User.updateOne({"_id":owner},{$push:{"collected_nfts":newNFT._id}})
    } 
    }catch (err) {
      console.error(err.message);
      next(err);
    }
  },
};
