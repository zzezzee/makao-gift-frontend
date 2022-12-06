import { productApiService } from '../services/ProductApiService';
import Store from './Store';

export default class ProductStore extends Store {
  constructor() {
    super();

    this.products = [];
    this.product = {};

    this.totalCount = 0;
    this.pageCount = 0;
    this.pageArray = [];
  }

  async fetchProducts(page) {
    const { products, totalCount } = await productApiService.fetchProducts(page);

    this.products = products;
    this.totalCount = totalCount;

    if (totalCount % 8 !== 0) {
      this.pageCount = parseInt(totalCount / 8 + 1, 10);
    }
    if (totalCount % 8 === 0) {
      this.pageCount = parseInt(totalCount / 8, 10);
    }

    this.pageArray = Array(this.pageCount).fill().map((_, i) => i + 1);

    console.log(this.products);

    this.publish();
  }

  async fetchProduct(id) {
    this.product = await productApiService.fetchProduct(id);

    this.publish();
  }
}

export const productStore = new ProductStore();
