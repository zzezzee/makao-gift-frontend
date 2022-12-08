import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import OrderFormPage from './OrderFormPage';

const navigation = jest.fn();

jest.mock('react-router-dom', () => ({
  useLocation() {
    return {
      state: {
        product: {},
        quantity: 1,
      },
    };
  },
  useNavigate() {
    return navigation;
  },
}));

test('OrderFormPage', () => {
  render((
    <ThemeProvider theme={theme}>
      <OrderFormPage />
    </ThemeProvider>));
});
