/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  const {
    register, handleSubmit, formState: { errors }, getValues,
  } = useForm();

  const onSubmit = async (data) => {
    // const {
    //   name, accountNumber, password, passwordConfirm,
    // } = data;

    // TODO: data를 이용해서 userStore에서 회원가입
    // TODO: 회원가입 후 회원가입 성공 페이지로 이동
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
            && (<p>3~7자까지 한글만 사용 가능</p>)}
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
          {errors.username
        && errors.username.type === 'required'
        && (<p>영문소문자/숫자, 4~16자만 사용 가능</p>)}
          {errors.username
        && errors.username.type === 'pattern'
            && (<p>해당 아이디는 사용할 수 없습니다</p>)}
          {!errors.username
          && (<p>로그인 및 거래시 사용될 계좌번호이며 숫자만 사용 가능(8글자)</p>)}
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
        && (<p>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</p>)}
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
