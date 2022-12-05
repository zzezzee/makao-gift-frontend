import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import RegisterForm from './RegisterForm';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('RegisterForm', async () => {
  render((<RegisterForm />));

  screen.getByRole('heading', { name: 'SIGN UP' });

  fireEvent.change(screen.getByLabelText('이름:'), {
    target: { value: '홍길동' },
  });
  fireEvent.change(screen.getByLabelText('아이디:'), {
    target: { value: 'zzezze' },
  });
  fireEvent.change(screen.getByLabelText('비밀번호:'), {
    target: { value: 'Password123!' },
  });
  fireEvent.change(screen.getByLabelText('비밀번호 확인:'), {
    target: { value: 'Password123!' },
  });

  fireEvent.click(screen.getByRole('button', { name: '회원가입' }));

  await waitFor(() => {
    expect(navigate).toBeCalledWith('/login');
  });
});
