import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { orderStore } from '../stores/OrderStore';
import theme from '../styles/Theme';
import OrderPage from './OrderPage';

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

test('OrderPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <OrderPage />
    </ThemeProvider>));
});
