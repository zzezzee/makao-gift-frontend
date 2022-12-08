import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import ProductPage from './ProductPage';

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

test('ProductPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <ProductPage />
    </ThemeProvider>));
});
