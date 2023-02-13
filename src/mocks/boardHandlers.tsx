import { rest } from 'msw';
import { useIndexedDB } from 'react-indexed-db';
const { getAll, update, deleteRecord } = useIndexedDB('boards');

export const boardsHandlers = [
  //get all Boards
  rest.get('/boards', async (req, res, ctx) => {
    const boards = await getAll();
    const personalBoards = boards.filter((board) => board.owner === localStorage.getItem('id'));

    return res(ctx.status(200), ctx.json(personalBoards));
  }),

  //create Board
  rest.post('/create/board', async (req, res, ctx) => {
    const reqBoardData = await req.json();
    update(reqBoardData);

    return res(ctx.status(200), ctx.json({ message: '보드를 생성하였습니다.' }));
  }),

  //update Board
  rest.post('/update/board', async (req, res, ctx) => {
    const reqBoardData = await req.json();
    update(reqBoardData);

    return res(ctx.status(200), ctx.json(await getAll()));
  }),

  //delete Board
  rest.post('/delete/board', async (req, res, ctx) => {
    const reqData = await req.json();
    deleteRecord(reqData.boardId);

    return res(ctx.status(200), ctx.json(await getAll()));
  }),
];
