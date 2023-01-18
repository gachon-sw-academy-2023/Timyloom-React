import shortid from 'shortid';

export const defaultData = () => {
  let boardUId = shortid.generate();
  let listUId = shortid.generate();
  let cardUId = shortid.generate();
  let data = {
    boardTitle: '새로운 보드',
    boardId: `b-${boardUId}`,
    owner: localStorage.getItem('id'),
    lists: [
      {
        listTitle: 'TODO LIST',
        listId: `l-${listUId}`,
        position: 0,
        cards: [
          { cardTitle: 'ACTIVE 1', cardId: `c-${cardUId}`, position: 0 },
          { cardTitle: 'ACTIVE 2', cardId: `c-${listUId}`, position: 1 },
        ],
      },
    ],
  };
  return data;
};
