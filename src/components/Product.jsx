import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import useProductStore from '../hooks/useProductStore';

const Container = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-inline: 10em;
  padding-top: 80px;
`;

const ImageWrapper = styled.div`
  img {
    border-radius: 1em;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h3`
  margin-bottom: 24px;
  font-size: ${((props) => props.theme.size.h3)};
  font-weight: 500;
`;

const Price = styled.h2`
  margin-bottom: 40px;
  font-size: ${((props) => props.theme.size.h1)};
  font-weight: 700;
`;

const Maker = styled.p`
  display: flex;
`;

export default function Product() {
  const navigate = useNavigate();

  const productStore = useProductStore();

  const { product } = productStore;

  const [quantity, setQuantity] = useState(1);

  const {
    maker, name, price, description, image,
  } = product;

  const handleClickMinus = () => {
    if (quantity > 1) {
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
    <Container>
      <ImageWrapper>
        <img alt="우유" src={image} height="220" width="180" />
      </ImageWrapper>
      <div>
        <Title>{name}</Title>
        <Price>
          {price}
          원
        </Price>
        <p>
          제조사
          {maker}
        </p>
        구매 수량
        <button type="button" onClick={handleClickMinus}>-</button>
        <div>{quantity}</div>
        <button type="button" onClick={handleClickPlus}>+</button>
        <p>
          상품설명
          {' '}
          {description}
        </p>
        <p>
          총 상품금액:
          {' '}
          {price * quantity}
          원
        </p>
        <button type="button" onClick={handleClickGift}>선물하기</button>
      </div>
    </Container>
  ));
}
