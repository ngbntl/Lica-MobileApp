import axios from "axios";
const baseUrl = "http://localhost:3000";

const signin = async ({ email, password }) => {
  try {
    const url = `${baseUrl}/api/auth/sign-in`;
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

export default {
  signin,
};
