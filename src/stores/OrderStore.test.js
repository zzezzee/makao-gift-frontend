import { waitFor } from '@testing-library/react';
import { orderStore } from './OrderStore';

const context = describe;

describe('OrderStore', () => {
  context('when request is successful', () => {
    async function request() {
      await orderStore.requestOrder({
        product: {
          id: 1,
          name: '상품이름',
          price: 10000,
          maker: '제조사',
          description: '상품설명',
          image: 'imageURL',
        },
        quantity: 1,
        receiver: '홍길동',
        address: '서울시',
        message: '보내는 메세지',
      });
    }

    it('sets order state to "success"', async () => {
      request();

      await waitFor(() => {
        expect(orderStore.isOrderSuccess).toBeTruthy();
      });
    });
  });
});
