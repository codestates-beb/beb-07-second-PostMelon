import axios from "axios";
const server =
  "https://port-0-beb-07-second-postmelon-3vw25lcimking.gksl2.cloudtype.app";

async function getAllPosts() {
  try {
    const res = await axios.get(`${server}/dev/post`);
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

export { getAllPosts };
