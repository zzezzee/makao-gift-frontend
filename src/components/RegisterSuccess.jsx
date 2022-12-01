import { useNavigate } from 'react-router-dom';

export default function RegisterSuccess() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };

  return ((
    <div>
      <h1>회원가입 완료</h1>
      <p>
        마카오 선물하기 회원가입이 완료되었습니다.
        정상적인 서비스 이용을 위해 로그인을 진행해주세요.
      </p>
      <button type="button" onClick={handleClickLogin}>로그인하기</button>
    </div>
  ));
}
