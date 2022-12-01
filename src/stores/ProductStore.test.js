const { default: ProductStore } = require('./ProductStore');

const context = describe;

describe('ProductStore', () => {
  let productStore;

  beforeEach(() => {
    productStore = new ProductStore();
  });

  describe('fetchProducts', () => {
    it('sets products', async () => {
      await productStore.fetchProducts();

      expect(productStore.products.length).toBe(1);
    });
  });

  describe('fetchProducts', () => {
    it('sets product', async () => {
      await productStore.fetchProduct(1);

      expect(productStore.product).not.toBeNull();
    });
  });
});
