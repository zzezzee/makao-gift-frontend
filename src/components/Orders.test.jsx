import { render, screen } from '@testing-library/react';
import Orders from './Orders';

test('Orders', () => {
  render(<Orders />);

  screen.getByText(/내가 주문한 내역/);
});
