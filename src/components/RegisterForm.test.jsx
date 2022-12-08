import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import RegisterForm from './RegisterForm';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

const context = describe;

describe('RegisterForm', () => {
  function renderRegisterForm() {
    render((
      <ThemeProvider theme={theme}>
        <RegisterForm />
      </ThemeProvider>
    ));
  }

  context('when register success', () => {
    it('go to success page', async () => {
      renderRegisterForm();

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
        expect(navigate).toBeCalledWith('/signup-success');
      });
    });
  });

  context('when register with empty input', () => {
    it('show error message', async () => {
      renderRegisterForm();

      screen.getByRole('heading', { name: 'SIGN UP' });

      fireEvent.change(screen.getByLabelText('이름:'), {
        target: { value: '' },
      });
      fireEvent.change(screen.getByLabelText('아이디:'), {
        target: { value: '' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호:'), {
        target: { value: '' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 확인:'), {
        target: { value: '' },
      });

      fireEvent.click(screen.getByRole('button', { name: '회원가입' }));

      await waitFor(() => {
        screen.getByText('이름을 입력해주세요');
        screen.getByText('아이디를 입력해주세요');
      });
    });
  });

  context('when register with existed username', () => {
    it('show error message', async () => {
      renderRegisterForm();

      screen.getByRole('heading', { name: 'SIGN UP' });

      fireEvent.change(screen.getByLabelText('이름:'), {
        target: { value: '홍길동' },
      });
      fireEvent.change(screen.getByLabelText('아이디:'), {
        target: { value: 'existusername' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호:'), {
        target: { value: 'Password123!' },
      });
      fireEvent.change(screen.getByLabelText('비밀번호 확인:'), {
        target: { value: 'Password123!' },
      });

      fireEvent.click(screen.getByRole('button', { name: '회원가입' }));

      await waitFor(() => {
        screen.getByText('해당 아이디는 사용할 수 없습니다');
      });
    });
  });
});
