import { Link } from "react-router-dom";


const Market = () => {
  return (
    <div className="flex font-sans w-1/3 h-1/4 ml-6">
  <div className="flex w-48 relative ml-16">
    <img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9CMK/image/TCRVSsiDzeoFQ2YEUfOJ5Nmb9Aw" alt="" className="width: 229px; height: 305px; left: -18px; top: 0px; opacity: 1; z-index: 2; transform-origin: 50% 50% 0px" loading="lazy" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        title
      </h1>
      <div className="text-lg font-semibold text-slate-500 pt-12 pr-10">
        price
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-16 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700 mb-24">
      Description
    </p>
    <div className="h-14">
        <button className="h-14 px-6 font-semibold rounded-md bg-black text-white ">
          <Link to="/nftmint">Create NFT</Link>
        </button>
      </div>
  </form>
</div>
  )
}

export default Market;
