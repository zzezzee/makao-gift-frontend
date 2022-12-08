import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h2 {
    margin-bottom: 16px;
    font-size: ${((props) => props.theme.size.h2)};
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: ${((props) => props.theme.size.h6)};
    color: gray;
    text-align: center;
  }

  button {
    margin-top: 2em;
    width: 50%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function RegisterSuccess() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };

  return ((
    <Container>
      <h2>회원가입 완료</h2>
      <p>
        마카오 선물하기 회원가입이 완료되었습니다.
      </p>
      <p>
        정상적인 서비스 이용을 위해 로그인을 진행해주세요.
      </p>
      <ButtonWrapper>
        <Button type="button" onClick={handleClickLogin}>로그인하기</Button>
      </ButtonWrapper>
    </Container>
  ));
}
