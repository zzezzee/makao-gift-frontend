import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Product from './Product';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

jest.mock('../hooks/useProductStore', () => () => ({
  product: {
    id: 1,
    name: '이건 1번 상품',
    price: 10000,
    maker: '제조사1',
    description: '이건 상품설명 1번',
    image: 'https://img.danawa.com/prod_img/500000/849/611/img/12611849_1.jpg??shrink=360:360&_v=20221201101009	',
  },
}));

describe('Product', () => {
  context('when click plus button', () => {
    it('quantity increase', async () => {
      render(<Product />);

      fireEvent.click(screen.getByRole('button', { name: '+' }));

      await waitFor(() => {
        screen.getByText('2');
      });
    });
  });

  context('when click minus button', () => {
    it('quantity decrease', async () => {
      render(<Product />);

      fireEvent.click(screen.getByRole('button', { name: '+' }));

      fireEvent.click(screen.getByRole('button', { name: '-' }));

      await waitFor(() => {
        screen.getByText('1');
      });
    });
  });

  context('when click minus button at quantity is 0', () => {
    it('quantity unchanged', async () => {
      render(<Product />);

      fireEvent.click(screen.getByRole('button', { name: '-' }));

      await waitFor(() => {
        screen.getByText('1');
      });
    });
  });

  context('when gift success', () => {
    it('go to order Page', async () => {
      render(<Product />);

      fireEvent.click(screen.getByRole('button', { name: '선물하기' }));

      expect(navigate).toBeCalled();
    });
  });
});
