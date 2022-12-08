import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useOrderStore from '../hooks/useOrderStore';

const Items = styled.ul`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  padding: 0em 3em;

  h4 {
    font-size: ${((props) => props.theme.size.h6)};
    color: ${((props) => props.theme.text.tertiary)};
  }

  h3 {
    display: -webkit-box;
    overflow: hidden;
    margin-block: 8px;
    
    text-overflow: ellipsis;
    font-size: ${((props) => props.theme.size.default)};

    color: ${((props) => props.theme.text.secondary)};

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-weight: 900;
  }
`;

const Message = styled.div`
  margin-top: 2em;
  padding: 1em 2em;

  font-size: ${((props) => props.theme.size.h5)};
  font-weight: 600;
`;

const Nav = styled.nav`
  padding: 3em;
  text-align: center;
`;

const Button = styled.button`
    border: 0;
    outline: 0;
    background-color: white;
    font-size: 1em;
    cursor: pointer;
`;

export default function Orders() {
  const orderStore = useOrderStore();
  const navigate = useNavigate();

  const { orders, pageArray } = orderStore;

  const handleClickChangePage = async (page) => {
    await orderStore.fetchOrders(page);

    navigate(`/orders?page=${page}`);
  };

  return ((
    <div>
      <Message>
        {orders.length
          ? <p>내가 주문한 내역입니다</p>
          : <p>내가 주문한 내역이 없습니다</p>}
      </Message>
      <Items>
        {orders.length !== 0
          && orders.map((order) => (
            <li key={order.id}>
              <a href={`/orders/${order.id}`}>
                <img src={order.image} alt="상품사진" height="220" width="180" />
                <h4>{order.maker}</h4>
                <h3>{order.name}</h3>
                <p>
                  To.
                  {' '}
                  {order.receiver}
                </p>
              </a>
            </li>
          ))}
      </Items>
      <Nav>
        {pageArray.map((page) => (
          <Button
            type="button"
            onClick={() => handleClickChangePage(page)}
            key={page}
          >
            {page}
          </Button>
        ))}
      </Nav>
    </div>
  ));
}
