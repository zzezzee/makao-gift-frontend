import { render, screen } from '@testing-library/react';
import Order from './Order';

test('OrderDetail', () => {
  render(<Order />);

  screen.getByText(/구매수량/);
  screen.getByText(/총 상품금액/);
  screen.getByText(/구매일/);
  // screen.getByText(/받는 분/);
  screen.getByText(/받는 분 주소/);
  screen.getByText(/받는 분께 보내는 메세지/);
});
