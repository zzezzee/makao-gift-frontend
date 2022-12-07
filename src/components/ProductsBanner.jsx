import styled from 'styled-components';
import { images } from '../assets';

export default function ProductsBanner() {
  return ((
    <Container image={images.banner}>
      <Description>
        <p>평범한 선물은 주기도 민망하다구요?</p>
        <strong>
          작정하고 준비한
          <br />
          마카오톡 선물하기 아이템
        </strong>
        <p>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</p>
      </Description>
    </Container>
  ));
}

const Container = styled.div`
  background: url(${({ image }) => image}) no-repeat 100% 100% #fce778;
`;

const Description = styled.article`
  font-weight: 700;
  padding: 5em 15em;

  em {
    font-size: ${((props) => props.theme.size.h4)};
    color: ${((props) => props.theme.colors.secondary)};
  }
  
  strong {
    display: block;
    margin-block: 24px;
    font-size: ${((props) => props.theme.size.h3)};
    color: ${((props) => props.theme.text.primary)};
  }
`;
