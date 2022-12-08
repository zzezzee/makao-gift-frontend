import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import OrdersPage from './OrdersPage';

test('OrdersPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <OrdersPage />
    </ThemeProvider>));
});
