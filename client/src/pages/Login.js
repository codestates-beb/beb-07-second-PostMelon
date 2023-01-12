import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "apis/loginAPI";

const Login = ({ setUserAuth }) => {
  // //서버와 연결전 테스트용 더미데이터
  // const realId = "postmelon@naver.com";
  // const realPw = "12345678";

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const [button, setButton] = useState(true);
  //유효성 검사를 하여 통과할 경우 로그인 버튼 활성화
  /**아이디에 '@'가 포함되어있고 비밀번호가 5자리 이상일 떄 로그인 버튼 활성화 */
  function changeButton() {
    id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  async function loginButton() {
    try {
      const data = await loginAPI(id, pw);
      console.log(data.data.data.userData);
      setUserAuth(data.data.data.accessToken, data.data.data.userData._id);

      alert("login success!!");
      goToHome();
    } catch (e) {
      console.log(e);
      alert("error...");
    }
  }

  return (
    <div className="container mx-auto px-5 py-24">
      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="mx-auto bg-gray">
          <div className="w-full p-2">
            <div className="relative ml-52 mt-6">
              <input
                placeholder="이메일"
                id="id"
                className="h-12 rounded-md bg-white px-6 font-semibold text-black"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onKeyUp={changeButton}
              />
            </div>
          </div>
          <div className="mx-auto w-full p-2">
            <div className="relative ml-52">
              <input
                type="password"
                placeholder="비밀번호"
                id="password"
                className="h-12 rounded-md bg-white px-6 font-semibold text-black"
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                onKeyUp={changeButton}
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative ml-52">
              <button
                type="button"
                className="hover:bg-indigo-600 mx-auto ml-16 flex rounded border-0 bg-black py-2 px-8 text-lg text-white focus:outline-none"
                disabled={button}
                onClick={loginButton}
              >
                Login
              </button>
            </div>
          </div>
          <div className="ml-72 w-1/2 p-2">
            <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
