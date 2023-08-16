import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64c53024c853c26efada9824.mockapi.io',
});

export const catalogRequest = async () => {
  const { data } = await instance.get('/advert');
  return data;
};
