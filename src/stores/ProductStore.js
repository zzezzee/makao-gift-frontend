import { productApiService } from '../services/ProductApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.product = {};
  }

  async fetchProducts(page) {
    this.products = await productApiService.fetchProducts(page);

    this.publish();
  }

  async fetchProduct(id) {
    this.product = await productApiService.fetchProduct(id);

    this.publish();
  }
}

export const productStore = new ProductStore();
