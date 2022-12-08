import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import Orders from './Orders';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('Orders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Orders />
    </ThemeProvider>,
  );

  screen.getByText(/내가 주문한 내역/);
});
