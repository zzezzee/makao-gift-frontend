import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Product from './Product';

test('Product', () => {
  render(
    <MemoryRouter>
      <Product />
    </MemoryRouter>,
  );
});
