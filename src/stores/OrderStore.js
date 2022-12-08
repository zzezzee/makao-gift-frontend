import { orderApiService } from '../services/OrderApiService';
import Store from './Store';

export default class OrderStore extends Store {
  constructor() {
    super();

    this.orders = [];
    this.order = {};

    this.orderState = '';

    this.pageCount = 0;
    this.pageArray = [];
  }

  async fetchOrders(page) {
    const { orders, pageCount } = await orderApiService.fetchOrders(page);

    this.orders = orders;
    this.pageCount = pageCount;

    this.pageArray = Array(this.pageCount).fill().map((_, i) => i + 1);

    this.publish();
  }

  async fetchOrder(id) {
    this.order = await orderApiService.fetchOrder(id);

    this.publish();
  }

  async requestOrder({
    productId, quantity, receiver, address, message,
  }) {
    try {
      const id = await orderApiService.createOrder({
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
