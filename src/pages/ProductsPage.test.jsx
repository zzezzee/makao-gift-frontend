import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import ProductsPage from './ProductsPage';

const location = jest.fn();
const navigation = jest.fn();

jest.mock('react-router-dom', () => ({
  useLocation() {
    return location;
  },
  useNavigate() {
    return navigation;
  },
}));

const fetchProducts = jest.fn();

jest.mock('../hooks/useProductStore', () => () => ({
  products: {},
  pageArray: [],
  fetchProducts,
}));

test('ProductsPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <ProductsPage />
    </ThemeProvider>));

  expect(fetchProducts).toBeCalled;
});
