import { apiService } from '../services/ApiService';
import Store from './Store';

export default class OrderStore extends Store {
  constructor() {
    super();

    this.orders = [];
    this.order = {};

    this.orderState = '';
  }

  async requestOrder({
    productId, quantity, receiver, address, message,
  }) {
    try {
      const id = await apiService.createOrder({
        productId,
        quantity,
        receiver,
        address,
        message,
      });

      this.changeOrderState('success');

      return id;
    } catch (e) {
      return '';
    }
  }

  changeOrderState(state) {
    this.orderState = state;
  }

  get isOrderSuccess() {
    return this.orderState === 'success';
  }
}

export const orderStore = new OrderStore();
