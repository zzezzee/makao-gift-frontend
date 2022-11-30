import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

test('LoginForm', () => {
  render(<LoginForm />);

  screen.getByRole('heading', { name: 'USER LOGIN' });

  fireEvent.change(screen.getByPlaceholderText(/아이디/), {
    target: { value: '1234' },
  });

  fireEvent.change(screen.getByPlaceholderText(/비밀번호/), {
    target: { value: 'password' },
  });

  // fireEvent.click(screen.getByRole('button', { name: '로그인' }));
});
