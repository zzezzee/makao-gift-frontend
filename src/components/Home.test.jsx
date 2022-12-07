import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';

import Home from './Home';

test('Home', () => {
  render((
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  ));
});
