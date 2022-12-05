import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { orderStore } from '../stores/OrderStore';

export default function OrderForm() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const { product, quantity } = state;

  const {
    id, maker, name, price,
  } = product;

  const [accessToken] = useLocalStorage('accessToken', '');

  const onSubmit = async (data) => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    const { receiver, address, message } = data;

    await orderStore.requestOrder({
      productId: id,
      quantity,
      receiver,
      address,
      message,
    });

    navigate('/orders');
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
          <label htmlFor="input-address">받는 분 주소</label>
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
          <label htmlFor="input-message">받는 분께 보내는 메세지</label>
          <input
            id="input-message"
            type="message"
            {...register('message')}
          />
          <p>100글자 이내로 입력해주세요</p>
        </div>
        <button type="submit">선물하기</button>
      </form>
    </div>
  ));
}
