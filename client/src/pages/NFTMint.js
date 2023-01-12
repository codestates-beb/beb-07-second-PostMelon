import homeImg from "static/image/home_img.jpg";
import { Link } from "react-router-dom";

const NFTMint = () => {
  return (
    // <div className="container px-5 py-24 mx-auto">
    //   <div className="lg:w-1/2 md:w-2/3 mx-auto">
    //     <div className="bg-gray text-center sm:text-2xl text-sm font-medium title-font mb-4 rounded-lg">

    //       <div className="p-2 w-full">

    //         <div className="p-2 w-full">
    //           <div className="relative">
    //             <label htmlFor="title"></label>
    //               <input
    //                 className="rounded-md"
    //                 placeholder="Title"
    //               />
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //           <label htmlFor="price"></label>
    //             <input
    //               className="rounded-md"
    //               placeholder="price"
    //               />
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //           <label htmlFor="URL"></label>
    //             <input
    //               className="rounded-md"
    //               placeholder="URL"
    //               />
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //           <label htmlFor="Description"></label>
    //           <input
    //               className="rounded-md"
    //               placeholder="Description"
    //               />
    //           </div>
    //         </div>
    //         <div className="p-2 w-full">
    //           <div className="relative">
    //             <button
    //               className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    //               type="submit"
    //               >
    //               Mint
    //               </button>
    //           </div>
    //         </div>
    //     </div>
    //    </div>
    //   </div>
    // </div>
    <div className="flex h-[677px] w-[1375px] items-stretch p-[30px] ">
      <div className="h-[58px] w-[100px] self-auto ">
        <div className="text-[48px] text-black">Mint</div>
      </div>
      <div className="h-[531px] w-[1375px] p-[50px] ">
        <div className="h-[531px] w-[355px]">
          <div className="h-[531px] w-[355px] rounded bg-gray-light ">
            <div className="h-[344px] w-[355px] rounded bg-white">
              <img
                className="h-[344px] w-[355px] rounded"
                src={homeImg}
                alt="none"
              ></img>
            </div>
            <div className="text-[24px] text-black">
              9535 Crypto Punk Bros 0.005 ETH
            </div>
          </div>
        </div>
      </div>

      <div className="h-[308px] w-[893px] self-auto border-[1px] border-solid border-gray p-[30px]">
        <div className="text-[32px] text-black">Description</div>
        <div className="h-[163px] w-[789px]">
          <div className="text-[24px] text-black ">
            I love Crypto Punk Bros. 9535
          </div>
        </div>
      
      <div className="h-[187px] w-[893px] self-auto border-[1px] border-solid border-gray p-[30px]">
      <div className="text-[32px] text-black">Current Price</div>
      <div className="flex flex-auto space-x-4">
        <button
          className="h-10 rounded-md bg-black px-16 font-semibold text-white"
          type="submit"
        >
          Buy 
        </button>

        <button
          className="text-slate-300 border-slate-200 flex h-9 w-9 flex-none items-center justify-center rounded-md border"
          type="button"
          aria-label="Like"
        >
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default NFTMint;
