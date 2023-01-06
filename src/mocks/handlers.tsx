import { rest } from 'msw';
export const handlers = [
  rest.get('/test', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'msw 모킹 테스트입니다. 백우진',
      }),
    );
  }),
];
