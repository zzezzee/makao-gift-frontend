/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const { accountNumber, password } = data;
    // userStore에서 로그인

    // accessToken 가져오기

    // accessToken을 가져오면 홈페이지로 이동
  };

  return ((
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
        {errors.username
              && <p>계좌번호를 입력해주세요</p>}
        {errors.password
              && <p>비밀번호를 입력해 주세요</p>}
      </div>
      <button type="submit">로그인</button>
    </form>
  ));
}
