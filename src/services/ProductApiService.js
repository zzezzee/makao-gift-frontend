import axios from 'axios';
import config from '../config';

const baseURL = config.apiBaseURL;

export default class ProductApiService {
  constructor() {
    this.accessToken = '';
  }

  async fetchProducts(page) {
    const url = `${baseURL}/products`;
    const { data } = await axios.get(url, {
      params: {
        page,
      },
    });

    return data;
  }

  async fetchProduct(id) {
    const url = `${baseURL}/products/${id}`;

    const { data } = await axios.get(url);

    const product = data;

    return product;
  }
}

export const productApiService = new ProductApiService();

/*
레벨테스트 9일차 회고

오늘은 로그인, 회원가입 유효성 검증과 페이지네이션을 만드는 중이다.



*/
