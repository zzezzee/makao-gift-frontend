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
      pageCount: 1,
    }),
  )),

  rest.get(`${baseURL}/products/:productId`, async (req, res, ctx) => res(
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

  rest.get(`${baseURL}/orders`, async (req, res, ctx) => res(
    ctx.json({
      orders: [
        {
          id: 1,
        },
      ],
    }),
  )),

  rest.get(`${baseURL}/orders/:orderId`, async (req, res, ctx) => res(
    ctx.json({
      order:
        {
          id: 1,
        },
    }),
  )),

  rest.post(`${baseURL}/orders`, async (req, res, ctx) => res(
    ctx.json({
      id: 1,
    }),
  )),

  rest.post(`${baseURL}/session`, async (req, res, ctx) => {
    const { username, password } = await req.json();

    if (username === '1234' && password === 'Password123!') {
      return res(
        ctx.json({
          amount: 100_000,
          accessToken: 'ACCESSTOKEN',
        }),
      );
    }

    return res(
      ctx.status(400),
    );
  }),

  rest.post(`${baseURL}/users`, async (req, res, ctx) => {
    const { username } = await req.json();
    if (username === 'existusername') {
      return res(
        ctx.status(400),
      );
    }

    return res(
      ctx.json({
        amount: 500000,
      }),
    );
  }),
);

export default server;
