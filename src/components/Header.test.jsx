import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line react/prop-types
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate() {
    return navigate;
  },
}));

describe('Header', () => {
  function renderHeader() {
    render(
      <Header />,
    );
  }
  it('render header', () => {
    renderHeader();

    screen.getByText('선물하기');
    screen.getByText('스토어');
    screen.getByText('주문조회');
  });
});