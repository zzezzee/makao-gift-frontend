import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { orderApiService } from './services/OrderApiService';
import { userApiService } from './services/UserApiService';

const data = localStorage.getItem('accessToken');
const accessToken = JSON.parse(data);

userApiService.setAccessToken(accessToken);
orderApiService.setAccessToken(accessToken);

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
));
