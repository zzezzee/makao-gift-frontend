import useOrderStore from '../hooks/useOrderStore';

export default function Orders() {
  const orderStore = useOrderStore();

  const { orders } = orderStore;

  console.log(orders);

  return ((
    <div>
      {orders.length
        ? <p>내가 주문한 내역입니다</p>
        : <p>내가 주문한 내역이 없습니다</p> }
      <ul>
        {orders.length !== 0
          && orders.map((order) => (
            <li key={order.id}>
              <a href={`/orders/${order.id}`}>
                <img src={order.image} alt="상품사진" height="220" width="180" />
                <p>{order.maker}</p>
                <p>{order.name}</p>
                <p>
                  To.
                  {' '}
                  {order.receiver}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  ));
}
