import axios from "axios";
// const server = "https://127.0.0.1:443";
const server = "https://168.126.89.172:443";
// "https://port-0-beb-07-second-postmelon-3vw25lcimking.gksl2.cloudtype.app";

async function getAllPosts() {
  try {
    const res = await axios.get(`${server}/post`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function getPostDetail(postId) {
  console.log("test", postId);
  try {
    const res = await axios.get(`${server}/post/${postId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function writePost(title, content, writer, accessToken) {
  try {
    const res = await axios.post(
      `${server}/post/write`,
      {
        title,
        content,
        writer,
      },
      {
        headers: { authorization: `Bearer ${accessToken}` },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export { getAllPosts, getPostDetail, writePost };
