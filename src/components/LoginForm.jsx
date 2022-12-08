/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import useUserStore from '../hooks/useUserStore';
import Button from '../ui/Button';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;


  height: 100vh;

  a {
    display: block;
    margin-top: 60px;
    text-align: center;
  }
`;

const Title = styled.h2`
  padding-block: 4px;
  border-bottom: 1px solid ${((props) => props.theme.colors.primary)};
  font-size: ${((props) => props.theme.size.h1)};
  font-weight: 700;
  text-align: center;
`;

const Inputs = styled.div`
  margin-block: 60px;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 1em;

  height: 3em;
  width: 100%;
`;

export default function LoginForm() {
  const navigate = useNavigate();

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const userStore = useUserStore();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { username, password } = data;

    const accessToken = await userStore.login({ username, password });

    if (accessToken) {
      setAccessToken(accessToken);
      navigate('/');
    }
  };

  return ((
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>USER LOGIN</Title>
        <Inputs>
          <Input
            id="input-username"
            type="text"
            placeholder="아이디"
            {...register('username', { required: true })}
          />
          <Input
            id="input-password"
            type="password"
            placeholder="비밀번호"
            {...register('password', { required: true })}
          />
          {userStore.errorState === 'loginError'
            && !errors.username
            && !errors.password
            ? <p>아이디 혹은 비밀번호가 맞지 않습니다</p>
            : null}
          {errors.username
               && <p>아이디를 입력해주세요</p>}
          {errors.password && !errors.username
            && <p>비밀번호를 입력해주세요</p>}
        </Inputs>
        <Button type="submit">로그인하기</Button>
        <a href="/signup">회원가입</a>
      </form>
    </Container>
  ));
}
