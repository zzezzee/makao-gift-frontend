import { userApiService } from '../services/UserApiService';
import Store from './Store';

export default class UserStore extends Store {
  constructor() {
    super();

    this.amount = 0;
    this.errorMessage = '';
    this.errorState = '';
  }

  async fetchUser() {
    const { amount } = await userApiService.fetchUser();

    this.amount = amount;

    this.publish();
  }

  async login({ username, password }) {
    this.errorMessage = '';

    try {
      const { accessToken, amount } = await userApiService.postSession({
        username, password,
      });

      this.amount = amount;

      return accessToken;
    } catch (e) {
      const message = e.response.data;
      this.changeLoginErrorState({ errorMessage: message });
      return '';
    }
  }

  async register({ name, username, password }) {
    this.errorMessage = '';

    try {
      const { amount } = await userApiService.createUser({ name, username, password });
      return amount;
    } catch (e) {
      const message = e.response.data;
      this.changeRegisterErrorState({ errorMessage: message });
      return '';
    }
  }

  changeLoginErrorState({ errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.errorState = 'loginError';

    this.publish();
  }

  changeRegisterErrorState({ errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.errorState = 'registerError';

    this.publish();
  }
}

export const userStore = new UserStore();
