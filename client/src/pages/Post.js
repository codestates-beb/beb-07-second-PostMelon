
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';


const Post = () => {

  const [post, setPost] = useState([{
    idx: '',
    title: '',
    nickname: '',
    content: '',
    updateDate: ''
}]);

const navigate = useNavigate();

const goToWritePost = () => {
      navigate('/writepost');
  };

// 백엔드에서 리스트 객체를 가져오는 부분
// useEffect(() => {
//     axios.get("/postdetail/:id")
//         .then(res => setPost(res.data.post))
//         .catch(error => console.log(error))
  

  return (
    <div className="p-[30px] ml-[200px] mr-[200px] min-h-[500px] bg-gray-light">
    <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-8"
            onClick={goToWritePost}>WritePost</button>
    <div className="">
        <table className="w-full">
            <thead className="grid border-b-[2px]">
            <tr>
                <th className="col-lg-2 w-1/6">
                    번호
                </th>
                <th className="col-lg-8 w-1/2">
                    제목
                </th>
                <th className="col-lg-8 w-1/2">
                    닉네임
                </th>
                <th className="col-lg-2">
                    작성일자
                </th>
            </tr>
            </thead>
            <tbody>
            {/* Post.map을 사용해서 반복문 구현 */}
            {post.map((post, idx) => {
                return (
                    <tr key={post.idx}>
                        <td>{post.idx}</td>
                        <td>{post.title}</td>
                        <td>{post.nickname}</td>
                        <td>{post.updateDate.split("T")[0]}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    </div>
</div>
  )
}

export default Post;
