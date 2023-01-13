import axios from "axios";
// const server = "https://127.0.0.1:443";
const server = "https://168.126.89.172:443";
// "https://port-0-beb-07-second-postmelon-3vw25lcimking.gksl2.cloudtype.app";

async function signupAPI(email, nickname, password) {
  try {
    const res = await axios.post(`${server}/signup`, {
      email,
      nickname,
      password,
    });

    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export { signupAPI };
