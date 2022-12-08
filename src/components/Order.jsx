import useOrderStore from '../hooks/useOrderStore';
import numberFormat from '../utils/numberFormat';

export default function Order() {
  const orderStore = useOrderStore();

  const { order } = orderStore;

  const createdAt = order.createdAt.substring(0, 10);

  return ((
    <div>
      <p>{order.maker}</p>
      <p>{order.name}</p>
      <p>
        구매수량
        {' '}
        {order.quantity}
      </p>
      <p>
        총 상품금액
        {' '}
        {numberFormat(order.totalPrice)}
      </p>
      <p>
        구매일
        {' '}
        {createdAt}
      </p>
      <p>
        받는 분
        {' '}
        {order.receiver}
      </p>
      <p>
        받는 분 주소
        {' '}
        {order.address}
      </p>
      <p>
        받는 분께 보내는 메세지
        {' '}
        {order.message}
      </p>
    </div>
  ));
}
