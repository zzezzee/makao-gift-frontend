import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { orderStore } from '../stores/OrderStore';
import Button from '../ui/Button';
import numberFormat from '../utils/numberFormat';

const Container = styled.article`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  margin: 3em;
  padding: 3em 1em;
  border: 1px solid ${((props) => props.theme.text.tertiary)};

  button {
    width: 50%;
    align-items: center;
  }
`;

const Product = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 80%;
  
  input {
    width: 100%;
    height: 40px;
  }

  div {
    margin-bottom: 1em;
  }

  label {
    display: block;
  }
`;

const DefaultDescription = styled.div`
  font-size: ${((props) => props.theme.size.h6)};
  color: gray;
`;

const Error = styled.p`
  font-size: ${((props) => props.theme.size.h6)};
  color: red;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function OrderForm() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const { product, quantity } = state;

  const {
    id, maker, name, price, image,
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
    <Container>
      <Product>
        <img alt="우유" src={image} height="220" width="180" />
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
            {numberFormat(price * quantity)}
          </p>
        </div>
      </Product>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="input-receiver">받는 분 성함</label>
          <input
            id="input-receiver"
            type="text"
            {...register('receiver', { required: true, pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,7}$/ })}
          />
          {errors.receiver && errors.receiver.type === 'required'
            && (<Error>이름을 입력해주세요</Error>)}
          {errors.receiver && errors.receiver.type === 'pattern'
            && (<Error>3~7자까지 한글만 사용 가능</Error>)}
          {!errors.receiver
            && (<DefaultDescription>3~7자까지 한글만 사용 가능</DefaultDescription>)}
        </div>
        <div>
          <label htmlFor="input-address">받는 분 주소</label>
          <input
            type="text"
            id="input-address"
            {...register('address', { required: true })}
          />
          {errors.address
        && errors.address.type === 'required'
        && (<Error>주소를 입력해주세요</Error>)}
          {!errors.address
              && (<DefaultDescription>주소지를 입력해주세요</DefaultDescription>)}
        </div>
        <div>
          <label htmlFor="input-message">받는 분께 보내는 메세지</label>
          <input
            id="input-message"
            type="message"
            {...register('message', {
              maxLength: 100,
            })}
          />
          <DefaultDescription>
            <p>100글자 이내로 입력해주세요</p>
          </DefaultDescription>
        </div>
        <ButtonWrapper>
          <Button type="submit">선물하기</Button>
        </ButtonWrapper>
      </Form>
    </Container>
  ));
}
