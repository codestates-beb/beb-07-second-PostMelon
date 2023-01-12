import axios from 'axios';

export async function loginAPI(email, password) {
    try {
      const res = await axios.post('http://server/user/login', {
        params: { email, password },
      });
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }