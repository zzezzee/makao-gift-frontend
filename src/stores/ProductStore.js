import { productApiService } from '../services/ProductApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.product = {};

    this.pageCount = 0;
    this.pageArray = [];
  }

  async fetchProducts(page) {
    const { products, pageCount } = await productApiService.fetchProducts(page);

    this.products = products;
    this.pageCount = pageCount;

    this.pageArray = Array(this.pageCount).fill().map((_, i) => i + 1);

    this.publish();
  }

  async fetchProduct(id) {
    this.product = await productApiService.fetchProduct(id);

    this.publish();
  }
}

export const productStore = new ProductStore();
