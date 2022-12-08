import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import Order from './Order';

test('Order', () => {
  render((
    <ThemeProvider theme={theme}>
      <Order />
    </ThemeProvider>
  ));

  screen.getByText(/구매수량/);
  screen.getByText(/총 상품금액/);
  screen.getByText(/구매일/);
  screen.getByText(/받는 분 주소/);
  screen.getByText(/받는 분께 보내는 메세지/);
});
