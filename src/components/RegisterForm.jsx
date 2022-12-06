/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../stores/UserStore';

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors }, getValues,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name, username, password,
    } = data;

    const id = await userStore.register({
      name, username, password,
    });

    if (typeof id === 'number') {
      navigate('/signup-success');
    }
  };

  return ((
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="input-name">이름:</label>
          <input
            id="input-name"
            type="text"
            {...register('name', { required: true, pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,7}$/ })}
          />
          {errors.name && errors.name.type === 'required'
            && (<p>이름을 입력해주세요</p>)}
          {errors.name && errors.name.type === 'pattern'
            && (<p>이름을 다시 확인해주세요</p>)}
          {!errors.name
            && (<p>3~7자까지 한글만 사용 가능</p>)}
        </div>
        <div>
          <label htmlFor="input-username">아이디:</label>
          <input
            type="text"
            id="input-username"
            {...register('username', { required: true, pattern: /^[a-z|0-9]{4,14}$/ })}
          />
          {errors.username && errors.username.type === 'required'
            && !userStore.errorState
            && (<p>아이디를 입력해주세요</p>)}
          {errors.username && errors.username.type === 'pattern'
            && !userStore.errorState
            && (<p>아이디를 다시 확인해주세요</p>)}
          {!errors.username
            && (<p>영문소문자/숫자, 4~16자만 사용 가능</p>)}
          {userStore.errorState === 'registerError'
          && (<p>해당 아이디는 사용할 수 없습니다</p>)}
        </div>
        <div>
          <label htmlFor="input-password">비밀번호:</label>
          <input
            id="input-password"
            type="password"
            {...register('password', {
              required: true,
              pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
            })}
          />
          {errors.password
        && errors.password.type === 'required'
        && (<p>비밀번호를 입력해주세요</p>)}
          {errors.password
        && errors.password.type !== 'required'
        && (<p>비밀번호를 다시 확인해주세요</p>)}
          {!errors.password
        && (<p>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</p>)}
        </div>
        <div>
          <label htmlFor="input-confirmPassword">비밀번호 확인:</label>
          <input
            id="input-confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === getValues('password'),
            })}
          />
          {errors.confirmPassword
        && errors.confirmPassword.type === 'required'
        && (<p>비밀번호를 입력해주세요</p>)}
          {errors.confirmPassword
        && errors.confirmPassword.type !== 'required'
        && (<p>비밀번호가 일치하지 않습니다</p>)}
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  ));
}


/*
레벨테스트기간 나는 얼마나 열심히하고있을까?




*/
