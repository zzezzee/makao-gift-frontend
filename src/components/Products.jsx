import useProductStore from '../hooks/useProductStore';

export default function Products() {
  const productStore = useProductStore();

  const { products } = productStore;

  console.log(products);

  return ((
    <div>
      <div>
        <p>평범한 선물은 주기도 민망하다구요?</p>
        <p>작정하고 준비한 마카오톡 선물하기 아이템</p>
        <p>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</p>
      </div>
      <ul>
        {products.length
          ? products.map((product) => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>
                <img alt="우유" src={product.image} height="220" width="180" />
                <p>{product.maker}</p>
                <p>{product.name}</p>
                <p>
                  {product.price}
                  원
                </p>
              </a>
            </li>
          ))
          : <p>상품이 존재하지 않습니다</p>}
      </ul>
    </div>
  ));
}
