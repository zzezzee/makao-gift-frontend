export default function Order() {
  // 네비게이터로 넘겨주기 아니면 orders에서 1개만 가져오기
  const order = {
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
  };

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
        {order.date}
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
