import axios from "axios";
const baseUrl = "http://192.168.1.10:3000/cards";

const getCards = async () => {
  try {
    const url = `${baseUrl}/cards`;
    const response = await axios.get(url);
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
const getCardsByTopic = async (id) => {
  try {
    const url = `${baseUrl}/card?topic=${id}`;
    const response = await axios.get(url);
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

const addCard = async (data) => {
  try {
    const url = `${baseUrl}`;
    const response = await axios.post(url, data);
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export default {
  getCards,
  getCardsByTopic,
  addCard,
};
