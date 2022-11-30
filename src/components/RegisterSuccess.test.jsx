import { render } from '@testing-library/react';
import RegisterSuccess from './RegisterSuccess';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate() {
    return navigate;
  },
}));

test('RegisterSuccess', () => {
  render(
    <RegisterSuccess />,
  );
});
