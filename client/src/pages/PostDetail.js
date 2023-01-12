import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <div
      className="mx-auto
    h-[805px] w-[1108px]
    bg-gray-light"
    >
      <div className="mx-auto h-[177px] w-[1108px] bg-gray-light pt-[60px]">
        <div className="mx-auto h-[99px] w-[1108px] bg-gray-light">
          <div
            className="text-center
  text-[32px]
  font-semibold
  text-gray"
          >
            Title
          </div>
        </div>
        <div
          className="
   post-info flex h-[15px] w-[1108px] justify-end p-[40px]
  "
        >
          <div
            className="
           
  mr-[150px]
  text-[24px]
  text-gray
  "
          >
            date
          </div>
          <div
            className="
  
  text-[24px]
  text-gray 
  "
          >
            writer
          </div>
        </div>

        <div
          className="
  h-[373px]
  w-[1108px]
  p-[40px]"
        >
          <div
            className="
  text-[24px]
  text-gray"
          >
            Contents
          </div>
        </div>
        <div
          className="
  
  h-[194px]
  w-[1108px] border-2 border-solid border-gray p-[30px]
  "
        >
          <div
            className="h-[29px]
  w-[35px]"
          >
            <div
              className="
  text-[20px]
  text-gray"
            >
              Coment
            </div>
          </div>
          <div
            className="h-[80px]
  w-[1045px]
  rounded
  bg-gray bg-opacity-25
  p-[10px]"
          ></div>

          <div
            className="h-[20px]
  w-[1039px]
  p-[10px]
  "
          >
            <button
              className="
  
  
  container
  w-[60px] rounded
  bg-black
  text-center
  text-[16px]
  text-white
  md:ml-[950px]"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
