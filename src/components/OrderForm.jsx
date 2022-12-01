import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

export default function OrderForm() {
  const { state } = useLocation();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const { product, quantity } = state;

  const { maker, name, price } = product;

  const onSubmit = async (data) => {
    // order추가
    // 주문조회 페이지 /orders로 이동
  };

  return ((
    <div>
      <p>{maker}</p>
      <p>{name}</p>
      <p>
        구매수량:
        {quantity}
      </p>
      <p>
        총 상품금액:
        {' '}
        { price * quantity}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="input-receiver">받는 분 성함</label>
          <input
            id="input-receiver"
            type="text"
            {...register('receiver', { required: true, pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,7}$/ })}
          />
          {errors.receiver && errors.receiver.type === 'required'
            && (<p>이름을 입력해주세요</p>)}
          {errors.receiver && errors.receiver.type === 'pattern'
            && (<p>3~7자까지 한글만 사용 가능</p>)}
          {!errors.receiver
            && (<p>3~7자까지 한글만 사용 가능</p>)}
        </div>
        <div>
          <label htmlFor="input-address">아이디:</label>
          <input
            type="text"
            id="input-address"
            {...register('address')}
          />
          {errors.address
        && errors.address.type === 'required'
        && (<p>주소를 입력해주세요</p>)}
          {!errors.address
          && (<p>주소지를 입력해주세요</p>)}
        </div>
        <div>
          <label htmlFor="input-password">비밀번호:</label>
          <input
            id="input-password"
            type="password"
            {...register('password')}
          />
          <p>100글자 이내로 입력해주세요</p>
        </div>
        <button type="submit">선물하기</button>
      </form>
    </div>
  ));
}
