import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import SignupSuccessPage from './SignupSuccessPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('SignupSuccessPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <SignupSuccessPage />
    </ThemeProvider>));
});
