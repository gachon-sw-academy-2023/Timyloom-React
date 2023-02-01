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
    lists: [
      {
        listTitle: 'TODO LIST',
        listId: `l-${listUId}`,
        cards: [
          { cardTitle: 'ACTIVE 1', cardId: `c-${cardUId}` },
          { cardTitle: 'ACTIVE 2', cardId: `c-${listUId}` },
        ],
      },
    ],
  };
  return data;
};
