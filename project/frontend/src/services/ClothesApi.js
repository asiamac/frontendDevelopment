import axios from 'axios';
import Cloth from '../models/Cloth';

const url = 'http://localhost:4000';

export const getClothesPrices = async () => {
  return await axios.get(`${url}/api/clothes/prices`);
}

const validateCloth = (cloth) => {
  for (const field in Cloth) {
    if (!cloth[field]) {
      throw Error(`${field} field is required for cloth!`);
    }
  }
}

export const addCloth = async (cloth) => {
  validateCloth(cloth);

  return await axios.post(`${url}/api/clothes`, cloth);
}

export const getClothes = async () => {
  return await axios.get(`${url}/api/clothes`);
}
