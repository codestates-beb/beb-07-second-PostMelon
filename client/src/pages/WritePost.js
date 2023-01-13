import { writePost } from "apis/postsAPI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WritePost = ({ userId, auth }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const submit = async () => {
    try {
      await writePost(title, content, userId, auth);
      navigate("/post");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="grid h-[753px] w-[1478px] place-items-center  p-[20px]">
      <div className="flex h-[48px] w-[228px] items-center">
        <div className="text-[40px] text-black">Write a Post</div>
      </div>
      <div className="h-[29px] w-[50px] ">
        <div className=" text-[24px] text-black">Title</div>
      </div>
      <div className="h-[58px] w-[783px]">
        <input
          onChange={titleChange}
          className="h-16 w-11/12 rounded-lg bg-gray-light pl-6 text-gray-dark focus:outline-none"
          placeholder="제목을 작성해주세요."
        ></input>
      </div>
      {/* <div className="h-[29px] w-[69px] ">
        <div className=" text-[24px] text-black">Writer</div>
      </div>
      <div className="h-[58px] w-[783px]">
        <input
          className="h-16 w-11/12 rounded-lg bg-gray-light pl-6 text-gray-dark focus:outline-none"
          placeholder="이름을 적어 주세요."
        ></input>
      </div> */}
      <div className="h-[29px] w-[104px] ">
        <div className=" text-[24px] text-black">Contents</div>
      </div>
      <div className="h-[171px] w-[783px]">
        <textarea
          onChange={contentChange}
          className="h-40 w-11/12 rounded-lg bg-gray-light p-10 text-gray-dark focus:outline-none"
        ></textarea>
      </div>
      <button
        onClick={submit}
        className="text=[20px] rounded bg-black p-3 text-white drop-shadow-md "
      >
        OK
      </button>
    </div>
  );
};

export default WritePost;
