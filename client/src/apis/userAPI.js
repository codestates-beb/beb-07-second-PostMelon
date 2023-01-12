import axios from "axios";
const server = "https://127.0.0.1:443";
// "https://port-0-beb-07-second-postmelon-3vw25lcimking.gksl2.cloudtype.app";

async function userDetailAPI(userId, accessToken) {
  if (userId && accessToken) {
    try {
      const res = await axios.get(`${server}/user/${userId}`, {
        headers: { authorization: `Bearer ${accessToken}` },
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  } else {
    return null;
  }
}

export { userDetailAPI };
