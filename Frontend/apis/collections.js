import axios from "axios";
const baseUrl = "http://192.168.1.5:3000/collections";

const getCollections = async () => {
  try {
    const url = `${baseUrl}`;
    const response = await axios.get(url);
    // console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
const addCollection = async (data) => {
  try {
    const url = `${baseUrl}`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export default {
  getCollections,
  addCollection,
};
