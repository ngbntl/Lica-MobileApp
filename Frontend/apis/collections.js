import axios from "axios";
const baseUrl = "http://192.168.1.5:3000";

const getCollections = async () => {
  try {
    const url = `${baseUrl}/collections`;
    const response = await axios.get(url);
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export default {
  getCollections,
};
