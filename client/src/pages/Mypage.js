import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <div className="h-[702px] w-[1478] p-[50px]">
      <div className="h-[268px] w-[287px] rounded-full bg-pink p-[30px] drop-shadow-md"></div>
      <div className="h-[49px] w-[290px] p-[10px]">
        <div className="p-[10px] text-center text-[24px] text-black">
          user ID
        </div>
      </div>
      <div className=" h-[30px] w-[800px] p-[10px]">
        <div className="h-[30px] w-[500px]  text-[16px] text-black">
          x78a1d9f41f50e41d1d15d09689d2c0089c5914지갑주소
        </div>
        <div className="grid place-items-center">
          <button className="text=[20px] rounded border-[1px] border-solid border-black bg-gray-light p-1 text-black drop-shadow-md">
            edit
          </button>
        </div>
      </div>

      <div className="item-stretch flex h-[110px]  w-[1458px] items-baseline">
        <div className="self-auto pt-[65px] text-[32px] text-black">Posts</div>
        <div className="self-auto pt-[65px]   text-[24px] text-black">
          Collected
        </div>
        <div className="self-auto pt-[65px]   text-[24px] text-black">
          Favorited
        </div>
        <div className="self-auto pt-[65px]  text-[24px] text-black">
          Created
        </div>
      </div>
      <div className="w-[1458px] border-b-2 bg-black"></div>

      <div className="flex h-[180px] w-[1458px] items-baseline">
        <div className="pt-[135px] pb-6 text-[32px] text-black">NFTs</div>
        <div className="pt-8 pb-6  text-[24px] text-black">Collected</div>
        <div className="pt-12 pb-6 text-[24px] text-black">Favorited</div>
        <div className=" pt-18 pb-6 text-[24px] text-black">Created</div>
      </div>
      <div className="w-[1458px] border-b-2 bg-black align-middle"></div>
    </div>
  );
};

export default Mypage;
