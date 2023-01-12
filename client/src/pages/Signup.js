
import React from "react";
import Form from "../components/layout/SignupForm";
import { signupAPI } from "apis/signupAPI";

const Signup = (props) => {

  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState(""); 

  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState("");

  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 똑같지 않아요!");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onClickSignup = async (e) => {
    if (isPassword === true &&
      isPasswordConfirm === true ) {
      const result = await signupAPI(email,nickname, password )
      console.log(result)
      }
  }

  const nickNameChange = (name) => {
    console.log(name)
    setNickname(name)
  }
  const emailChange = (email) => {
    console.log(email)
    setEmail(email)
  }



  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="bg-gray text-center sm:text-3xl text-2xl font-medium title-font mb-4 rounded-lg">
          Welcome
          <div className="p-2 w-full">
            <div className="relative">
              <Form
                nickNameChange={nickNameChange}
                htmlFor="name"
                id="name"
                name="name"
                sucessMsg="사용가능한 닉네임 입니다."
                errorMsg="닉네임은 2글자 이상 5글자 이하로 입력해주세요!"
                />
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="password"></label>
                  <input
                    className="rounded-lg"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={onChangePassword}
                  />
                  <p className="text-sm mt-2">{passwordMessage}</p>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
              <label htmlFor="passwordConfirm"></label>
                <input
                  className="rounded-lg"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  placeholder="passwordConfirm"
                  value={passwordConfirm}
                  onChange={onChangePasswordConfirm}
                  />
                  <p className="text-sm mt-2">{passwordConfirmMessage}</p>
              </div>
            </div>
            <div className="p-2 w-full">
            <Form
              emailChange={emailChange}
              htmlFor="email"
              id="email"
              name="email"
              sucessMsg="사용 가능한 이메일 입니다."
              errorMsg="이메일의 형식이 올바르지 않습니다!"
              reg="2"
              />
              <p className="text-sm mt-2">{passwordConfirmMessage}</p>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <button
                  className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  type="submit"
                  disabled={
                  isPassword === true &&
                  isPasswordConfirm === true 
                  ? false
                  : true
                  }
                  onClick={onClickSignup}
                  >
                  Join
                  </button>
              </div>
            </div>
        </div>
       </div>
      </div>
    </div> 


    
  );
};

export default Signup;
// const Signup = () => {
//   return (
//     <div className="join">
//       <div className="join-inner w-1/3 h-[737px] mx-auto mt-[46px] pt-[60px]">
//         <div className="join-content w-[80%] mx-auto flex flex-col items-center">
//           <div className="welcome text-[40px] font-bold mb-[50px]">
//             Welcome
//           </div>

//           <form className="w-[100%] flex flex-col items-center">
//             <input
//               className="h-14 w-[100%] rounded-lg bg-gray-light pl-6 text-gray-dark focus:outline-none"
//               placeholder="input post name or content"
//             ></input>
//             <input className="nickname w-[100%] h-14 rounded-lg mb-[80px] bg-gray-light focus:outline-none" placeholder="input post name or content"></input>
//             <input className="email w-[100%] mb-[80px] border-2" placeholder="input post name or content"></input>
//             <input className="password w-[100%] border-2" placeholder="input post name or content"></input>
          
//             <button className="submit w-2/3 mx-auto bg-black text-white h-[40px] ">join</button>

//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Signup;
