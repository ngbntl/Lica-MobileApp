import axios from "axios";
const baseUrl = "http://192.168.1.8:3000";

const addCollection = async (collection) => {
  try {
    const url = `${baseUrl}/collections`;
    const response = await axios.post(url, collection, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default {
  addCollection,
};
