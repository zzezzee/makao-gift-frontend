import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import useUserStore from '../hooks/useUserStore';
import numberFormat from '../utils/numberFormat';

export default function Header() {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    if (accessToken) {
      userStore.fetchUser();
    }
  }, []);

  const handleLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  return ((
    <Container>
      <Nav>
        <List>
          <li>
            <h1>
              <Link to="/">선물하기</Link>
            </h1>
          </li>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/products">스토어</Link>
          </li>
          <li>
            <Link to={accessToken ? '/orders' : 'login'}>주문조회</Link>
          </li>
        </List>
        {accessToken
          ? (
            <List>
              <li>
                내 잔액:
                {' '}
                {numberFormat(userStore.amount)}
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
      </Nav>
    </Container>
  ));
}

const Container = styled.header`
  height: 64px;

  border-bottom: 1px solid ${((props) => props.theme.colors.border)};
`;

const List = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin: 1em;
    padding-inline: .5em;
  }

  button {
    border: 0;
    outline: 0;
    background-color: white;
    font-size: 1em;
    font-weight: 600;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 0em 5em;
  font-size: 1em;
  font-weight: 700;

  h1 {
    font-size: 1.5em;
  }
`;
