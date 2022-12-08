import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Order from '../components/Order';
import useOrderStore from '../hooks/useOrderStore';

export default function OrderPage() {
  const location = useLocation();

  const orderStore = useOrderStore();

  const orderId = location.pathname?.split('/')[2] || '';

  useEffect(() => {
    orderStore.fetchOrder(orderId);
  }, []);

  return ((
    <Order />
  ));
}
