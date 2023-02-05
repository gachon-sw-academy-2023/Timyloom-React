import shortid from 'shortid';

export const defaultData = () => {
  let boardUId = shortid.generate();
  let listUId = shortid.generate();
  let cardUId = shortid.generate();
  let data = {
    boardTitle: '새로운 보드',
    boardId: `b-${boardUId}`,
    owner: localStorage.getItem('id'),
    logs: [],
    lists: [],
  };
  return data;
};
