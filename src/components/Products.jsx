import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useProductStore from '../hooks/useProductStore';
import ProductsBanner from './ProductsBanner';

export default function Products() {
  const productStore = useProductStore();
  const navigate = useNavigate();

  const { products, pageArray } = productStore;

  const handleClickChangePage = async (page) => {
    await productStore.fetchProducts(page);

    navigate(`/products?page=${page}`);
  };

  return ((
    <div>
      <ProductsBanner />
      {products.length
        ? <Message>인기 선물을 한 자리에 모았어요</Message>
        : <Message>상품이 존재하지 않습니다</Message>}
      <Items>
        {products.length
          ? products.map((product) => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>
                <ImageWrapper>
                  <img alt="우유" src={product.image} height="220" width="180" />
                </ImageWrapper>
                <h4>{product.maker}</h4>
                <h3>{product.name}</h3>
                <strong>
                  {product.price}
                  원
                </strong>
              </a>
            </li>
          ))
          : null}
      </Items>
      <Nav>
        {pageArray.map((page) => (
          <button
            type="button"
            onClick={() => handleClickChangePage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
      </Nav>
    </div>
  ));
}

const Items = styled.ul`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  padding: 0em 3em;

  h4 {
    font-size: ${((props) => props.theme.size.h6)};
    color: ${((props) => props.theme.text.tertiary)};
  }

  h3 {
    display: -webkit-box;
    overflow: hidden;
    margin-block: 8px;
    
    text-overflow: ellipsis;
    font-size: ${((props) => props.theme.size.default)};

    color: ${((props) => props.theme.text.secondary)};

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  strong {
    font-size: ${((props) => props.theme.size.h5)};
    font-weight: 500;
    color: ${((props) => props.theme.text.secondary)};
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 14px;
  border-radius: 1em;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const Message = styled.p`
  margin-top: 2em;
  padding: 1em 2em;

  font-size: ${((props) => props.theme.size.h5)};
  font-weight: 600;
`;

const Nav = styled.nav`
  padding: 3em;
  text-align: center;
`;
