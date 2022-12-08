import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import SignupPage from './SignupPage';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('SignupPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <SignupPage />
    </ThemeProvider>));
});
