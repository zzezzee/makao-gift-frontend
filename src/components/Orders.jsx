export default function Orders() {
  // TODO OrderStore에서 orders 받아오기

  const orders = [
    {
      id: 1,
      product: {
        maker: '제조사1',
        name: '상품이름',
        price: 10000,
      },
      quantity: 1,
      totalPrice: 120000,
      date: '2022-10-01',
      receiver: 'zzezze',
      address: '서울시',
      message: '안녕',
    },
  ];

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
                <p>{order.product.maker}</p>
                <p>{order.product.name}</p>
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
