import axios from 'axios';
import config from '../config';

const baseURL = config.apiBaseURL;

export default class ProductApiService {
  constructor() {
    this.accessToken = '';
  }

  async fetchProducts() {
    const url = `${baseURL}/products`;
    const { data } = await axios.get(url);

    const { products } = data;

    return products;
  }

  async fetchProduct(id) {
    const url = `${baseURL}/products/${id}`;
    const { data } = await axios.get(url);

    const product = data;

    return product;
  }
}

export const productApiService = new ProductApiService();
