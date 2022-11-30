import { render } from '@testing-library/react';
import Order from './Order';

jest.mock('react-router-dom', () => ({
  useLocation() {
    return {
      state: {
        product: {
          id: 1,
          maker: '제조사는 이러하다',
          name: '상품이름',
          price: 10000,
          description: '상품설명은 이러하다',
        },
        quantity: 1,
      },
    };
  },
}));

test('Order', () => {
  render(
    <Order />,
  );
});
