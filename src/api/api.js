import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64c53024c853c26efada9824.mockapi.io',
});

export const firstPageCatalogRequest = async PAGE => {
  const { data } = await instance.get('/advert', {
    params: { page: PAGE, limit: 8 },
  });
  return data;
};

export const allCarsRequest = async () => {
  const { data } = await instance.get('/advert');
  return data;
};
