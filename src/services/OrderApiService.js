import axios from 'axios';
import config from '../config';

const baseURL = config.apiBaseURL;

export default class OrderApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async fetchOrders(page = 1) {
    const url = `${baseURL}/orders`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
      params: {
        page,
      },
    });

    return data;
  }

  async fetchOrder(id) {
    const url = `${baseURL}/orders/${id}`;

    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    const order = data;

    return order;
  }

  async createOrder({
    productId,
    quantity,
    receiver,
    address,
    message,
  }) {
    const url = `${baseURL}/orders`;

    const { data } = await axios.post(
      url,
      {
        productId,
        quantity,
        receiver,
        address,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      },
    );

    const id = data;

    return id;
  }
}

export const orderApiService = new OrderApiService();
