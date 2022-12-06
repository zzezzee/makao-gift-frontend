import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import useUserStore from '../hooks/useUserStore';

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
            <Link to={accessToken ? '/orders' : 'login'}>주문조회</Link>
          </li>
        </List>
        {accessToken
          ? (
            <List>
              <li>
                내 잔액:
                {' '}
                {userStore.amount}
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
