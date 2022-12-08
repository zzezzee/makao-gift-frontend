import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import HomePage from './HomePage';

test('HomePage', () => {
  render((
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>));
});
