import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../hooks/useProductStore';

export default function Product() {
  const navigate = useNavigate();

  const productStore = useProductStore();

  const { product } = productStore;

  const [quantity, setQuantity] = useState(1);

  const {
    maker, name, price, description, image,
  } = product;

  const handleClickMinus = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClickPlus = () => {
    setQuantity(quantity + 1);
  };

  const handleClickGift = () => {
    if (quantity >= 1) {
      navigate('/order', {
        state: {
          product,
          quantity,
        },
      });
    }
  };

  return ((
    <div>
      <img alt="우유" src={image} height="220" width="180" />
      <p>{name}</p>
      <p>{price}</p>
      <p>
        제조사
        {' '}
        {maker}
      </p>
      <p>
        구매 수량
        <button type="button" onClick={handleClickMinus}>-</button>
        {quantity}
        <button type="button" onClick={handleClickPlus}>+</button>
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
