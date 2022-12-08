import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import useProductStore from '../hooks/useProductStore';
import useUserStore from '../hooks/useUserStore';
import Button from '../ui/Button';
import numberFormat from '../utils/numberFormat';

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

const Table = styled.table`
  tr {
    border-top: 1px solid ${((props) => props.theme.colors.border)};
    border-bottom: 1px solid ${((props) => props.theme.colors.border)};
  }

  th {
    padding-right: 60px;
    color: #666666;
    font-size: ${((props) => props.theme.size.default)};
    font-weight: 500;
    text-align: left;
  }

  td {
    font-size: ${((props) => props.theme.size.h5)};
  }

  th, td {
    padding-block: 20px;
  }
`;

const TotalPrice = styled.h3`
  margin-block: 30px;
  font-size: ${((props) => props.theme.size.default)};
  font-weight: 500;
  text-align: right;
  strong {
    vertical-align: middle;
    font-size: ${((props) => props.theme.size.h1)};
    font-weight: 700;
  }
`;

const Error = styled.p`
  text-align: center;
  padding: 1em;
  color: red;
`;

export default function Product() {
  const navigate = useNavigate();

  const userStore = useUserStore();
  const productStore = useProductStore();

  const { amount } = userStore;
  const { product } = productStore;

  const [quantity, setQuantity] = useState(1);

  const {
    maker, name, price, description, image,
  } = product;

  const totalPrice = quantity * price;

  const handleClickMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClickPlus = () => {
    setQuantity(quantity + 1);
  };

  const handleClickGift = () => {
    if (amount >= totalPrice && quantity >= 1) {
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
          {numberFormat(price)}
          원
        </Price>
        <Table>
          <tbody>
            <tr>
              <th>제조사</th>
              <td>{maker}</td>
            </tr>
            <tr>
              <th>구매 수량</th>
              <td>
                <button
                  type="button"
                  onClick={handleClickMinus}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={handleClickPlus}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <th>상품설명</th>
              <td>{description}</td>
            </tr>
          </tbody>
        </Table>
        <TotalPrice>
          총 상품금액:
          {' '}
          <strong>
            {numberFormat(totalPrice)}
            원
          </strong>
        </TotalPrice>
        <Button type="button" onClick={handleClickGift}>선물하기</Button>
        {userStore.amount < (totalPrice)
          ? <Error>❌ 잔액이 부족하여 선물하기가 불가합니다 ❌</Error>
          : null}
      </div>
    </Container>
  ));
}
