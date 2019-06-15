import axios from 'axios';

const url = 'http://localhost:4000';

export const getClothesPrices = async () => {
  return await axios.get(`${url}/api/clothes/prices`);
}

export const addClothesPrices = async (prices) => {
  return await axios.post(`${url}/api/clothes/prices`, prices);
}

export const getClothesModels = async () => {
  return await axios.get(`${url}/api/clothes/models`);
}

export const addClothesModels = async (prices) => {
  return await axios.post(`${url}/api/clothes/models`, prices);
}

export const getClothesOutlets = async () => {
  return await axios.get(`${url}/api/clothes/prices`);
}

export const addClothesOutlets = async (prices) => {
  return await axios.post(`${url}/api/clothes/prices`, prices);
}
