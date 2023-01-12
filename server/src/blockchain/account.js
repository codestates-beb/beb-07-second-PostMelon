const { web3J } = require('./');

//환경변수 세팅
async function setServerAccount() {
  try {
    const accounts = await web3J.eth.getAccounts();
    process.env.SERVER_ACC = accounts[0];

    const key = require('../config/key/keys.json');
    const bufferOrigin = Buffer.from(
      Object.values(key.addresses)[0].secretKey.data
    );
    console.log(bufferOrigin);
    process.env.SERVER_PK = `0x${bufferOrigin.toString('hex')}`;

    process.env.TOKEN_CA =
      require('./contract_json/MyToken.json').networks[5777].address;
    console.log('server_pk : ', process.env.SERVER_PK);
    console.log('token_ca : ', process.env.TOKEN_CA);
    return process.env.SERVER_ACC;
  } catch (e) {
    console.error(e);
  }
}

//계정 생성
async function createAccount(password) {
  try {
    const account = await web3J.eth.personal.newAccount(password);
  
    return account;
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  createAccount,
  setServerAccount,
};
