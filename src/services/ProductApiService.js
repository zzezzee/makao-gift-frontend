import axios from 'axios';
import config from '../config';

const baseURL = config.apiBaseURL;

export default class ProductApiService {
  async fetchProducts(page = 1) {
    const url = `${baseURL}/products`;
    const { data } = await axios.get(url, {
      params: {
        page,
      },
    });

    return data;
  }

  async fetchProduct(id) {
    const url = `${baseURL}/products/${id}`;

    const { data } = await axios.get(url);

    const product = data;

    return product;
  }
}

export const productApiService = new ProductApiService();
