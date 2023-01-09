import { rest } from 'msw';
export const handlers = [
  //test
  rest.get('/test', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'msw 모킹 테스트입니다. 백우진',
      }),
    );
  }),

  //login
  rest.post('/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),

  rest.post('/signup', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),
];
