const { default: ProductStore } = require('./ProductStore');

const context = describe;

describe('ProductStore', () => {
  let productStore;

  beforeEach(() => {
    productStore = new ProductStore();
  });

  context('when fetchProducts', () => {
    it('set products', async () => {
      await productStore.fetchProducts();

      expect(productStore.products.length).toBe(1);
    });
  });

  context('when fetchProduct', () => {
    it('sets product', async () => {
      await productStore.fetchProduct(1);

      expect(productStore.product).toBeTruthy();
    });
  });
});
