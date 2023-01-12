import axios from "axios";
const server = "https://127.0.0.1:443";
// "https://port-0-beb-07-second-postmelon-3vw25lcimking.gksl2.cloudtype.app";

async function loginAPI(email, password) {
  try {
    const res = await axios.post(`${server}/login`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export { loginAPI };
