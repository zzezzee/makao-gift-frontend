import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { productStore } from '../stores/ProductStore';
import theme from '../styles/Theme';
import Products from './Products';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

const context = describe;

describe('Products', () => {
  function renderProducts() {
    render((
      <ThemeProvider theme={theme}>
        <Products />
      </ThemeProvider>
    ));
  }
  productStore.fetchProducts();

  context('when only one product exists', () => {
    it('show product', async () => {
      renderProducts();

      productStore.fetchProducts(1);

      await waitFor(() => {
        screen.getByText('이건 1번 상품');
      });
    });
  });
});
