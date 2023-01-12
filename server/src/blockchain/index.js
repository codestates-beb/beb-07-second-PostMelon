require('dotenv').config();
const Web3 = require('web3');
const web3J = new Web3(
  new Web3.providers.HttpProvider(
    process.env.DOCKER == 'true'
      ? 'http://host.docker.internal:7545'
      : 'http://127.0.0.1:7545'
  )
);

const Web3Contract = require('web3-eth-contract');

// ABI와 contract address 가져오기
const tokenABI = require('./ABI/MyToken');
const { TOKEN_CA } = process.env;

Web3Contract.setProvider(
  process.env.DOCKER == 'true'
    ? 'http://host.docker.internal:7545'
    : 'http://127.0.0.1:7545'
);
const tokenContract = new Web3Contract(tokenABI, TOKEN_CA);

module.exports = {
  web3J,
  tokenContract,
};
