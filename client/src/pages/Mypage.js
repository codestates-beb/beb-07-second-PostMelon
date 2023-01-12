import { Link } from "react-router-dom";
import { userDetailAPI } from "apis/userAPI";
import { useEffect, useState } from "react";

const Mypage = ({ auth, userId }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    userDetailAPI(userId, auth).then((res) => {
      if (res) {
        console.log(res);
        setUserInfo({ ...res.data });
      }
    });
  }, []);

  return (
    <div className="w-[1478] p-[50px]">
      <div className="h-[268px] w-[287px] rounded-full bg-pink p-[30px] drop-shadow-md"></div>
      <div className="h-[49px] w-[290px] p-[10px]">
        <div className="p-[10px] text-center text-[24px] text-black">
          {userInfo ? userInfo.nickname : "user nickname"}
        </div>
      </div>
      <div className="mb-28 h-[30px] w-[800px] p-[10px]">
        <div className="ml-10 h-[30px] w-[500px]  text-[16px] text-black">
          {userInfo
            ? `address : ${userInfo.address}`
            : "address : 0x1234567890"}
        </div>
        <div className="ml-10 h-[30px] w-[500px]  text-[16px] text-black">
          {userInfo
            ? `token amount : ${userInfo.token_amount} mel`
            : "no token"}
        </div>
        <div className="ml-10 h-[30px] w-[500px]  text-[16px] text-black">
          {userInfo ? `ether amount : ${userInfo.eth_amount} mel` : "no ether"}
        </div>
        <div className="grid place-items-center">
          <button className="text=[20px] rounded border-[1px] border-solid border-black bg-gray-light p-1 text-black drop-shadow-md">
            edit
          </button>
        </div>
        <div className="mt-5 grid place-items-center">
          <button className="text=[20px] rounded border-[1px] border-solid border-black bg-gray-light p-1 text-black drop-shadow-md">
            ether faucet
          </button>
        </div>
      </div>

      <div className="item-stretch flex h-[110px]  w-[1458px] items-baseline">
        <div className="mr-5 self-auto pt-[65px] text-[32px] text-black">
          Posts
        </div>
        <div className="mr-5 self-auto pt-[65px]   text-[24px] text-black">
          Collected
        </div>
        <div className="mr-5 self-auto pt-[65px]   text-[24px] text-black">
          Favorited
        </div>
        <div className="self-auto pt-[65px]  text-[24px] text-black">
          Created
        </div>
      </div>
      <div className="w-[1458px] border-b-2 bg-black"></div>

      <div className="flex h-[180px] w-[1458px] items-baseline">
        <div className="mr-5 pt-[135px] pb-6 text-[32px] text-black">NFTs</div>
        <div className="mr-5 pt-8 pb-6  text-[24px] text-black">Collected</div>
        <div className="mr-5 pt-12 pb-6 text-[24px] text-black">Favorited</div>
        <div className=" pt-18 pb-6 text-[24px] text-black">Created</div>
      </div>
      <div className="w-[1458px] border-b-2 bg-black align-middle"></div>
    </div>
  );
};

export default Mypage;
