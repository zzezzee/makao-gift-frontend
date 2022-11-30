import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const context = describe;

describe('Header', () => {
  function renderHeader() {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  }
  it('render header', () => {
    renderHeader();

    screen.getByText('선물하기');
    screen.getByText('스토어');
    screen.getByText('주문조회');
  });
});
