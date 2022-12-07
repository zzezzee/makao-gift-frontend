import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useLocalStorage } from 'usehooks-ts';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OrderFormPage from './pages/OrderFormPage';
import OrderPage from './pages/OrderPage';
import OrdersPage from './pages/OrdersPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';
import SignupSuccessPage from './pages/SignupSuccessPage';
import { orderApiService } from './services/OrderApiService';
import { userApiService } from './services/UserApiService';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

export default function App() {
  const [accessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    userApiService.setAccessToken(accessToken);
    orderApiService.setAccessToken(accessToken);
  }, [accessToken]);

  return ((
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup-success" element={<SignupSuccessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/order" element={<OrderFormPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:orderId" element={<OrderPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  ));
}
