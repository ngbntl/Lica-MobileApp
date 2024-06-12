import axios from "axios";
const baseUrl = "http://192.168.1.6:3000";

const signin = async ({ email, password }) => {
  try {
    const url = `${baseUrl}/auth/sign-in`;
    const response = await axios.post(
      url,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
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
