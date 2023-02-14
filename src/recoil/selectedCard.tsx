import { atom } from 'recoil';

export const selectedCardAtom = atom({
  key: 'selectedCardAtom',
  default: {
    isModalopen: false,
    boardId: '',
    listId: '',
    cardId: '',
    cardData: {
      cardId: '',
      cardTitle: '',
      cardDescription: '',
      isDone: false,
      date: {
        from: {
          year: 2023,
          month: 2,
          day: 3,
        },
        to: {
          year: 2023,
          month: 2,
          day: 3,
        },
      },
    },
  },
});
