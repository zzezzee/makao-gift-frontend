import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';

import RegisterSuccess from './RegisterSuccess';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('RegisterSuccess', () => {
  render(
    <ThemeProvider theme={theme}>
      <RegisterSuccess />
    </ThemeProvider>,
  );
});
