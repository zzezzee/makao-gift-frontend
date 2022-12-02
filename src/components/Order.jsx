import useOrderStore from '../hooks/useOrderStore';

export default function Order() {
  const orderStore = useOrderStore();

  const { order } = orderStore;

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
        {order.totalPrice}
      </p>
      <p>
        구매일
        {' '}
        {order.createdAt}
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
