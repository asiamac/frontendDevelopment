import axios from 'axios';

const url = 'http://localhost:4000';

export const getClothesPrices = async () => {
  return await axios.get(`${url}/api/clothes/prices`);
}

const validate = (object) => {
  if (!object.name) {
    throw Error('name field is required for every POST api call!');
  }
}

export const addClothPrice = async (cloth) => {
  validate(cloth);

  if (!cloth.price)
    throw Error('price field is required for addClothesPrices!');

  return await axios.post(`${url}/api/clothes/prices`, cloth);
}

export const getClothesModels = async () => {
  return await axios.get(`${url}/api/clothes/models`);
}

export const addClothModel = async (cloth) => {
  validate(cloth);

  if (!cloth.model)
    throw Error('model field is required for addClothesModels!');

  return await axios.post(`${url}/api/clothes/models`, cloth);
}

export const getClothesOutlets = async () => {
  return await axios.get(`${url}/api/clothes/prices`);
}

export const addClothOutlet = async (cloth) => {
  validate(cloth);

  if (!cloth.outlet)
    throw Error('outlet field is required for addClothOutlet!');

  return await axios.post(`${url}/api/clothes/prices`, cloth);
}
