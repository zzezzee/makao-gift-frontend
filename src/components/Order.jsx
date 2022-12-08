import styled from 'styled-components';
import useOrderStore from '../hooks/useOrderStore';
import numberFormat from '../utils/numberFormat';

const Container = styled.article`
  text-align: center;
`;
const Table = styled.table`
  width: 80%;

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

export default function Order() {
  const orderStore = useOrderStore();

  const { order } = orderStore;

  const createdAt = order.createdAt?.substring(0, 10) || '';

  return ((
    <Container>
      <img alt="우유" src={order.image} height="220" width="180" />
      <p>{order.maker}</p>
      <p>{order.name}</p>
      <Table>
        <tr>
          <th>구매수량</th>
          <td>{order.quantity}</td>
        </tr>
        <tr>
          <th>총 상품금액</th>
          <td>{numberFormat(order.totalPrice)}</td>
        </tr>
        <tr>
          <th>구매일</th>
          <td>{createdAt}</td>
        </tr>
        <tr>
          <th> 받는 분</th>
          <td>{order.receiver}</td>
        </tr>
        <tr>
          <th>받는 분 주소</th>
          <td>{order.address}</td>
        </tr>
        <tr>
          <th>받는 분께 보내는 메세지</th>
          <td>{order.message}</td>
        </tr>
      </Table>
    </Container>
  ));
}
