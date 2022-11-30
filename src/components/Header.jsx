import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    margin: 1em;
  }
`;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Header() {
  const navigate = useNavigate();

  // TODO: AccessToken에 따라서 헤더에 보여줄 내용을 다르게 하기
  let accesstoken = '123';

  // TODO: store에서 내 잔액 가져오기
  const amount = 50000;

  const handleLogout = () => {
    accesstoken = '';
    console.log('로그아웃');
    navigate('/');
  };

  return ((
    <div>
      <Wrapper>
        <List>
          <li>
            <h1>선물하기</h1>
          </li>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/products">스토어</Link>
          </li>
          <li>
            <Link to={accesstoken ? '/orders' : 'login'}>주문조회</Link>
          </li>
        </List>
        {accesstoken
          ? (
            <List>
              <li>
                내 잔액:
                {' '}
                {amount}
              </li>
              <li>
                <button type="button" onClick={handleLogout}>로그아웃</button>
              </li>
            </List>
          )
          : (
            <List>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </List>
          )}
      </Wrapper>
    </div>
  ));
}
