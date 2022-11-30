import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate();

  // TODO: id로 상품 찾아오기

  // TODO 이런 카운트가 있으면 될듯, -> orderStore에서 관리?
  const [quantity, setQuantity] = useState(0);

  const product = {
    id: 1,
    maker: '제조사는 이러하다',
    name: '상품이름',
    price: 10000,
    description: '상품설명은 이러하다',
  };

  const {
    id, maker, name, price, description,
  } = product;

  const handleMinus = () => {
    setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleClickGift = () => {
    navigate('/order', {
      state: {
        product,
        quantity,
      },
    });
  };

  return ((
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>
        제조사
        {' '}
        {maker}
      </p>
      <p>
        구매 수량
        <button type="button" onClick={handleMinus}>-</button>
        {quantity}
        <button type="button" onClick={handlePlus}>+</button>
      </p>
      <p>
        상품설명
        {' '}
        {description}
      </p>
      <p>
        총 상품금액:
        {' '}
        {price * quantity}
      </p>
      <button type="button" onClick={handleClickGift}>선물하기</button>
    </div>
  ));
}
