import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "apis/postsAPI";

const Post = () => {
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  const goToWritePost = () => {
    navigate("/writepost");
  };

  // 백엔드에서 리스트 객체를 가져오는 부분
  // useEffect(() => {
  //     axios.get("/postdetail/:id")
  //         .then(res => setPost(res.data.post))
  //         .catch(error => console.log(error))
  useEffect(() => {
    getAllPosts().then((res) => {
      console.log(res.data);
      setPost([...res.data]);
    });
  }, []);

  const goDetail = async (id) => {
    navigate(`/postdetail`, { state: { postId: id } });
  };

  return (
    <div className="ml-[200px] mr-[200px] min-h-[500px] bg-gray-light p-[30px]">
      <button
        className="hover:bg-indigo-600 mb-8 rounded border-0 bg-black py-2 px-8 text-lg text-white focus:outline-none"
        onClick={goToWritePost}
      >
        WritePost
      </button>
      <div className="">
        <table className="w-full">
          <thead className="border-b-[2px]">
            <tr>
              <th className="col-lg-2 w-1/6">번호</th>
              <th className="col-lg-8 w-1/3">제목</th>
              <th className="col-lg-8 w-1/3">닉네임</th>
              <th className="col-lg-2 ">작성일자</th>
            </tr>
          </thead>
          <tbody>
            {/* Post.map을 사용해서 반복문 구현 */}
            {post.map((p, idx) => {
              return (
                <tr
                  className="text-center hover:cursor-pointer"
                  onClick={() => {
                    goDetail(p._id);
                  }}
                  key={p._id}
                >
                  <td>{idx + 1}</td>
                  <td>{p.title}</td>
                  <td>{p.writer.nickname}</td>
                  <td>{p.created_at.split("T")[0]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Post;
