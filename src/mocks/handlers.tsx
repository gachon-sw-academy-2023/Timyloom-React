import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getByIndex, getAll, add } = useIndexedDB('users');
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
  rest.post('/login', async (req, res, ctx) => {
    let isMatching;
    await getAll().then((person) => {
      let selectUser = person.find(({ id }) => id == req.body.id);
      if (!selectUser) {
        return res(ctx.status(202), ctx.json(req.body));
      }
      isMatching = selectUser.id === req.body.id && selectUser.password === req.body.password;
    });
    if (isMatching) {
      return res(ctx.status(200), ctx.json(req.body));
    } else {
      return res(ctx.status(202), ctx.json(req.body));
    }
  }),

  //signup
  rest.post('/signup', async (req, res, ctx) => {
    let isUser;
    await getAll().then((person) => {
      isUser = person.find(({ id }) => id == req.body.id) !== undefined;
    });
    if (isUser) {
      return res(ctx.status(202), ctx.json(req.body));
    } else {
      add({ ...req.body });
      return res(ctx.status(200), ctx.json(req.body));
    }
  }),
];
