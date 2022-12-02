import { useEffect } from 'react';
import Orders from '../components/Orders';
import useORderStore from '../hooks/useOrderStore';

export default function OrdersPage() {
  const orderStore = useORderStore();

  useEffect(() => {
    orderStore.fetchOrders();
  }, []);

  return ((
    <Orders />
  ));
}
