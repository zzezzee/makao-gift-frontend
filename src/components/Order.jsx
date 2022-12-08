import styled from 'styled-components';
import useOrderStore from '../hooks/useOrderStore';
import numberFormat from '../utils/numberFormat';

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  height: 300px;
  background-color: #FFF5BD;
`;

const Table = styled.table`
  width: 80%;

  margin-top: 40px;
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
    color: #666666;
    font-size: ${((props) => props.theme.size.h5)};
    text-align: right
  }

  th, td {
    padding-block: 20px;
  }
`;

const Wrapper = styled.div`
  position: absolute;

  top: 20%;
  left: 60%;

  transform: translate(-50%, 0);
  padding-bottom: 80px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Detail = styled.article`
  margin-top: 4em;
  width: 50em;

  h3 {
    text-align: center;
    font-size: 1.5em;
    color: gray;
    margin-bottom: .5em;
  }

  h4 {
    text-align: center;
    font-size: 2em;
    font-weight: 700;
  }
`;

export default function Order() {
  const orderStore = useOrderStore();

  const { order } = orderStore;

  const {
    image, maker, name, quantity, totalPrice, receiver, address, message,
  } = order;

  const createdAt = order.createdAt?.substring(0, 10) || '';

  return ((
    <Container>
      <Background />
      <Wrapper>
        <Image alt="우유" src={image} height="220" width="180" />
        <Detail>
          <h3>{maker}</h3>
          <h4>{name}</h4>
          <Table>
            <tbody>
              <tr>
                <th>구매수량</th>
                <td>{quantity}</td>
              </tr>
              <tr>
                <th>총 상품금액</th>
                <td>{numberFormat(totalPrice)}</td>
              </tr>
              <tr>
                <th>구매일</th>
                <td>{createdAt}</td>
              </tr>
              <tr>
                <th> 받는 분</th>
                <td>{receiver}</td>
              </tr>
              <tr>
                <th>받는 분 주소</th>
                <td>{address}</td>
              </tr>
              <tr>
                <th>받는 분께 보내는 메세지</th>
                <td>{message}</td>
              </tr>
            </tbody>
          </Table>
        </Detail>
      </Wrapper>
    </Container>
  ));
}
