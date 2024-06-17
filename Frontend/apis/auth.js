import axios from "axios";
const baseUrl = "http://192.168.1.5:3000";

const signin = async (data) => {
  try {
    const url = `${baseUrl}/auth/sign-in`;

    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
const signUp = async (data) => {
  try {
    const url = `${baseUrl}/auth/sign-up`;
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  signin,
  signUp,
};
