import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import LoginForm from './LoginForm';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('LoginForm', async () => {
  render(<LoginForm />);

  screen.getByRole('heading', { name: 'USER LOGIN' });

  fireEvent.change(screen.getByPlaceholderText(/아이디/), {
    target: { value: '1234' },
  });

  fireEvent.change(screen.getByPlaceholderText(/비밀번호/), {
    target: { value: 'Password123!' },
  });

  fireEvent.click(screen.getByRole('button', { name: '로그인' }));

  await waitFor(() => {
    expect(navigate).toBeCalledWith('/');
  });
});

test('LoginForm', () => {
  render(<LoginForm />);

  fireEvent.click(screen.getByRole('button', { name: '회원가입' }));

  expect(navigate).toBeCalledWith('/signup');
});
