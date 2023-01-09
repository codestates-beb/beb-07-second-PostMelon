const Web3 = require('web3');
const {user} = require('../models')
//추후 production상태일 때 Infura로 바꿔줘야함
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

//서버 계정 설정하기
async function setServerAccount() {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    return accounts[0];
  } catch (e) {
    console.error(e);
  }
}

async function createAccount(password) {
  try {
    const account = await web3.eth.personal.newAccount(password);
    return account;
  } catch (e) {
    console.error(e);
  }
}

async function getEth(address, userId) {
try{
  const sendAccount = process.env.SERVER_ADDRESS;
  const privateKey = process.env.SERVER_PRIVATE_KEY;
  const tx = {
    from : sendAccount, 
    to : address,
    gas : 200000,
    value : web3.utils.toWei("1","ether") 
  }

  await web3.eth.accounts.signTransaction(tx, privateKey) // 트랜잭션에 sign 서명 
  .then((signedTx) => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, async(err, hash)=>{ // sign 된 트랜잭션 전송, 
      if(!err){ // 트랜잭션 성공시 eth balance 잔액 확인
        const balance = await web3.eth.getBalance(address);
        console.log(web3.utils.fromWei(balance, "ether"));
        await user.update( // 해당 주소의 이더 잔고 업데이트
          {ethAmount : parseFloat(web3.utils.fromWei(balance, "ether"))},
          {userId}
        );
      } else {
        console.log("Transaction Failed : ", err)
        return user;
      }
    })
  })
}catch(e){
  console.error(e);
}
}

module.exports = {
  setServerAccount,
  createAccount,
  getEth
};
