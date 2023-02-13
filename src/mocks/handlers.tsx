import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll, add } = useIndexedDB('users');

export const handlers = [
  //login
  rest.post('/login', async (req, res, ctx) => {
    let isMatching;
    const reqData = await req.json();
    await getAll().then((person) => {
      let selectUser = person.find(({ id }) => id == reqData.id);
      if (!selectUser) {
        return res(ctx.delay(2000), ctx.status(202), ctx.json(req.body));
      }
      isMatching = selectUser.id === reqData.id && selectUser.password === reqData.password;
    });
    if (isMatching) {
      return res(ctx.delay(2000), ctx.status(200), ctx.json(reqData));
    } else {
      return res(ctx.delay(2000), ctx.status(202), ctx.json(reqData));
    }
  }),

  //signup
  rest.post('/signup', async (req, res, ctx) => {
    let isUser;
    const reqData = await req.json();
    await getAll().then((person) => {
      isUser = person.find(({ id }) => id == reqData.id) !== undefined;
    });
    if (isUser) {
      return res(ctx.delay(2000), ctx.status(202), ctx.json(reqData));
    } else {
      add(reqData);
      return res(ctx.delay(2000), ctx.status(200), ctx.json(reqData));
    }
  }),
];
