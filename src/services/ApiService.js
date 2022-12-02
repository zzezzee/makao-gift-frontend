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

  async fetchProduct(id) {
    const url = `${baseURL}/products/${id}`;
    const { data } = await axios.get(url);

    const product = data;

    return product;
  }

  async createOrder({
    productId,
    quantity,
    receiver,
    address,
    message,
  }) {
    const url = `${baseURL}/orders`;

    const { data } = await axios.post(url, {
      productId,
      quantity,
      receiver,
      address,
      message,
    });

    const id = data;

    return id;
  }
}

export const apiService = new ApiService();
