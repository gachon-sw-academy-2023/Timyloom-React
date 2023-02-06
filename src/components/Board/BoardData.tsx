import shortid from 'shortid';

export const defaultData = () => {
  const boardUId = shortid.generate();
  const listUId = shortid.generate();
  const cardUId = shortid.generate();
  const data = {
    boardTitle: '새로운 보드',
    boardId: `b-${boardUId}`,
    owner: localStorage.getItem('id'),
    backgroundColor: '#ffffff',
    logs: [],
    lists: [],
  };
  return data;
};
