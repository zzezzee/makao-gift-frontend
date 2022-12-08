import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import OrdersPage from './OrdersPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('OrdersPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <OrdersPage />
    </ThemeProvider>));
});
