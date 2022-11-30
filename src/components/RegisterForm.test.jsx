import { render, screen } from '@testing-library/react';
import RegisterForm from './RegisterForm';

test('RegisterForm', () => {
  render(<RegisterForm />);

  screen.getByRole('heading', { name: 'SIGN UP' });

  screen.getByLabelText('이름:');
  screen.getByLabelText('아이디:');
  screen.getByLabelText('비밀번호:');
  screen.getByLabelText('비밀번호 확인:');

  screen.getByRole('button', { name: '회원가입' });
});
