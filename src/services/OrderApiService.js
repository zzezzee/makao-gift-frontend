import axios from 'axios';
import config from '../config';

const baseURL = config.apiBaseURL;

export default class OrderApiService {
  constructor() {
    this.accessToken = '';
  }

  async fetchOrders() {
    const url = `${baseURL}/orders`;
    const { data } = await axios.get(url);

    const { orders } = data;

    return orders;
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

export const orderApiService = new OrderApiService();
