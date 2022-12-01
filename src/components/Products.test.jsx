import { render, screen, waitFor } from '@testing-library/react';
import { productStore } from '../stores/ProductStore';
import Products from './Products';

const context = describe;

test('Products', () => {
  render(<Products />);
});

describe('ProductStore', () => {
  productStore.fetchProducts();

  context('when go to ProductPage', () => {
    it('show basic paragraph', () => {
      render(<Products />);

      screen.getByText('평범한 선물은 주기도 민망하다구요?');
      screen.getByText('작정하고 준비한 마카오톡 선물하기 아이템');
      screen.getByText('마카오톡 선물하기에서만 볼 수 있는 특별템 기획전');
    });
  });

  context('when only one product exists', () => {
    it('show product', async () => {
      productStore.fetchProducts();

      render(<Products />);

      await waitFor(() => {
        screen.getByText('이건 1번 상품');
        screen.getByText('작정하고 준비한 마카오톡 선물하기 아이템');
        screen.getByText('마카오톡 선물하기에서만 볼 수 있는 특별템 기획전');
      });
    });
  });
});
