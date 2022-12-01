import axios from 'axios';
import config from '../config';

const baseURL = config.apiBaseURL;

export default class ApiService {
  constructor() {
    this.accessToken = '';
  }

  async fetchProducts() {
    const url = `${baseURL}/products`;
    const { data } = await axios.get(url);

    const { products } = data;

    return products;
  }
}

export const apiService = new ApiService();
