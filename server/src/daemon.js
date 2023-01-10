const cron = require('node-cron');
const Web3 = require('web3');
const web3J = new Web3(
  new Web3.providers.HttpProvider('http://127.0.0.1:7545')
);

let cur_num = 0;
const getRecentBlock = async () => {
  const recent = await web3J.eth.getBlockNumber();
  return recent;
};

const blockInfo = async (recent) => {
  console.log(cur_num, recent);
  if (cur_num >= recent) return;

  const block = await web3J.eth.getBlock(recent);
  cur_num = recent;

  return block;
};

const listen = cron.schedule(
  '*/3 * * * * *',
  async function () {
    const recent = await getRecentBlock();
    const block = await blockInfo(recent);
    console.log(block);
  },
  { scheduled: false }
);

listen.start();
