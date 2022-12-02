import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import OrderForm from './OrderForm';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
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

const context = describe;

describe('Order', () => {
  context('when click 선물하기 with correct input', () => {
    it('go to orders page', async () => {
      render(
        <OrderForm />,
      );

      fireEvent.change(screen.getByLabelText('받는 분 성함'), {
        target: { value: '홍길동' },
      });

      fireEvent.change(screen.getByLabelText('받는 분 주소'), {
        target: { value: '서울시 광진구 자양로' },
      });

      fireEvent.change(screen.getByLabelText('받는 분께 보내는 메세지'), {
        target: { value: '선물입니다' },
      });

      fireEvent.click(screen.getByRole('button', { name: '선물하기' }));

      await waitFor(() => {
        expect(navigate).toBeCalled();
      });
    });
  });
});
