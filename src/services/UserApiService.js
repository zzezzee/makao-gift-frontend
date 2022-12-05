import axios from 'axios';
import config from '../config';

const baseURL = config.apiBaseURL;

export default class UserApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async fetchUser() {
    const url = `${baseURL}/users/me`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return data;
  }

  async postSession({ username, password }) {
    const url = `${baseURL}/session`;
    const { data } = await axios.post(url, { username, password });

    return {
      accessToken: data.accessToken,
      amount: data.amount,
    };
  }

  async createUser({ name, username, password }) {
    const url = `${baseURL}/users`;
    const { data } = await axios.post(url, { name, username, password });

    return {
      amount: data.amount,
    };
  }
}

export const userApiService = new UserApiService();
