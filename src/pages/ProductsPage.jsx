import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../components/Products';
import useProductStore from '../hooks/useProductStore';

export default function ProductsPage() {
  const productStore = useProductStore();
  const location = useLocation();

  const page = location.search.split('=')[1];

  useEffect(() => {
    productStore.fetchProducts(page);
  }, [page]);

  return ((
    <Products />
  ));
}
