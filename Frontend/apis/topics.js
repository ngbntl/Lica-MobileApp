import axios from "axios";
const baseUrl = "http://192.168.1.10:3000/topics";

const getTopics = async () => {
  try {
    const url = `${baseUrl}`;
    const response = await axios.get(url);
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

const getTopicsByColletionId = async (id) => {
  try {
    console.log(id);
    const url = `${baseUrl}/topic?collection=${id}`;
    const response = await axios.get(url);
    //console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

const addTopic = async (data) => {
  try {
    const url = `${baseUrl}`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getTopics,
  getTopicsByColletionId,
  addTopic,
};
