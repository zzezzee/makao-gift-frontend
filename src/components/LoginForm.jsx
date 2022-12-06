/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import useUserStore from '../hooks/useUserStore';

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

  const handleClickRegister = () => {
    navigate('/signup');
  };

  return ((
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>USER LOGIN</h1>
        <div>
          <p>
            <label htmlFor="input-username" />
            <input
              id="input-username"
              type="text"
              placeholder="아이디"
              {...register('username', { required: true })}
            />
          </p>
        </div>
        <div>
          <label htmlFor="input-password" />
          <input
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
        </div>
        <button type="submit">로그인하기</button>
      </form>
      <button type="button" onClick={handleClickRegister}>
        회원가입
      </button>
    </div>
  ));
}
