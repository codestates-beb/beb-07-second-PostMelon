const { web3J } = require('./');

//환경변수 세팅
async function setServerAccount() {
  try {
    const accounts = await web3J.eth.getAccounts();
    process.env.SERVER_ACC = accounts[0];
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
};
