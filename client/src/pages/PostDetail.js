import { getPostDetail } from "apis/postsAPI";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState();

  const location = useLocation();
  const postId = location.state.postId;

  useEffect(() => {
    console.log(postId);
    getPostDetail(postId).then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

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
            {post ? post.title : `title`}
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
            {post ? post.created_at.split("T")[0] : `date`}
          </div>
          <div
            className="
  
  text-[24px]
  text-gray 
  "
          >
            {post ? post.writer.nickname : "name"}
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
            {post ? post.content : "content"}
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
            <button
              className="text-slate-300 border-slate-200 flex h-9 w-9 flex-none items-center justify-center rounded-md border"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
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
