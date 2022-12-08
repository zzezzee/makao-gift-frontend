import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  padding-block: 1em;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  width: 100%;
  border-radius: .5em;
  cursor: pointer;
`;

export default Button;
