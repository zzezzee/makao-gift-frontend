/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseURL = config.apiBaseURL;

const server = setupServer(
  rest.get(`${baseURL}/products`, async (req, res, ctx) => res(
    ctx.json({
      products: [
        {
          id: 1,
          name: '이건 1번 상품',
          price: 10000,
          maker: 'mega',
          description: '이건 상품설명 1번',
        },
      ],
    }),
  )),

  rest.get(`${baseURL}/products/1`, async (req, res, ctx) => res(
    ctx.json({
      product:
        {
          id: 1,
          name: '이건 1번 상품',
          price: 10000,
          maker: 'mega',
          description: '이건 상품설명 1번',
        },
    }),
  )),
);

export default server;
