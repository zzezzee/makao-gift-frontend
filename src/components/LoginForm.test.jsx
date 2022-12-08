import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import LoginForm from './LoginForm';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

const context = describe;

describe('LoginForm', () => {
  function renderLoginForm() {
    render((
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    ));
  }

  context('when login success', () => {
    it('go to homePage', async () => {
      renderLoginForm();

      screen.getByRole('heading', { name: 'USER LOGIN' });

      fireEvent.change(screen.getByPlaceholderText(/아이디/), {
        target: { value: '1234' },
      });

      fireEvent.change(screen.getByPlaceholderText(/비밀번호/), {
        target: { value: 'Password123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        expect(navigate).toBeCalledWith('/');
      });
    });
  });

  context('when login with empty username', () => {
    it('login failed', async () => {
      renderLoginForm();

      screen.getByRole('heading', { name: 'USER LOGIN' });

      fireEvent.change(screen.getByPlaceholderText(/아이디/), {
        target: { value: '' },
      });

      fireEvent.change(screen.getByPlaceholderText(/비밀번호/), {
        target: { value: 'Password123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        screen.getByText('아이디를 입력해주세요');
      });
    });
  });

  context('when login with empty password', () => {
    it('login failed', async () => {
      renderLoginForm();

      screen.getByRole('heading', { name: 'USER LOGIN' });

      fireEvent.change(screen.getByPlaceholderText(/아이디/), {
        target: { value: '1234' },
      });

      fireEvent.change(screen.getByPlaceholderText(/비밀번호/), {
        target: { value: '' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        screen.getByText('비밀번호를 입력해주세요');
      });
    });
  });

  context('when login with wrong username', () => {
    it('login failed', async () => {
      renderLoginForm();

      screen.getByRole('heading', { name: 'USER LOGIN' });

      fireEvent.change(screen.getByPlaceholderText(/아이디/), {
        target: { value: '12345' },
      });

      fireEvent.change(screen.getByPlaceholderText(/비밀번호/), {
        target: { value: 'Password123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        screen.getByText('아이디 혹은 비밀번호가 맞지 않습니다');
      });
    });
  });

  context('when login with wrong password', () => {
    it('login failed', async () => {
      renderLoginForm();

      screen.getByRole('heading', { name: 'USER LOGIN' });

      fireEvent.change(screen.getByPlaceholderText(/아이디/), {
        target: { value: '1234' },
      });

      fireEvent.change(screen.getByPlaceholderText(/비밀번호/), {
        target: { value: 'Passwoxxx' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

      await waitFor(() => {
        screen.getByText('아이디 혹은 비밀번호가 맞지 않습니다');
      });
    });
  });
});
