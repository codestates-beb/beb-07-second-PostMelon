

const NFTMint = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="bg-gray text-center sm:text-2xl text-sm font-medium title-font mb-4 rounded-lg">
          
          <div className="p-2 w-full">
            
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="title"></label>
                  <input
                    className="rounded-md"
                    placeholder="Title"
                  />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
              <label htmlFor="price"></label>
                <input
                  className="rounded-md"
                  placeholder="price"
                  />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
              <label htmlFor="URL"></label>
                <input
                  className="rounded-md"
                  placeholder="URL"
                  />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
              <label htmlFor="Description"></label>
              <input
                  className="rounded-md"
                  placeholder="Description"
                  />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <button
                  className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                  >
                  Mint
                  </button>
              </div>
            </div>
        </div>
       </div>
      </div>
    </div> 

  )
};

export default NFTMint;
