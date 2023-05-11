import axios from 'axios';

const apiURL = 'http://localhost:3001';

export const getCartItems = () => {
  return axios.get(`${apiURL}/cart`);
};
export const getFavoritesItems = () => {
  return axios.get(`${apiURL}/favorites`);
};
export const getProducts = () => {
  return axios.get(`${apiURL}/products`);
};
export const getOrders = () => {
  return axios.get(`${apiURL}/orders`);
};

export const addItemToCart = async (obj) => {
  const response = await axios.post(`${apiURL}/cart`, obj);

  return response;
};
export const deleteItemFromCart = async (id) => {
  const response = await axios.delete(`${apiURL}/cart/${id}`);

  return response;
};
export const addItemToFavorites = async (obj) => {
  const response = await axios.post(`${apiURL}/favorites`, obj);

  return response;
};
export const deleteItemFromFavorites = async (id) => {
  const response = await axios.delete(`${apiURL}/favorites/${id}`);

  return response;
};
export const sendNewOrder = async (arr, sum) => {
  const d = new Date();
  const order = {
    items: arr,
    date: `${d.getHours()}:${d.getMinutes()} ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`,
    totalAmount: sum,
  };
  const response = await axios.post(`${apiURL}/orders`, order);

  return response;
};
