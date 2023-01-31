import { atom } from 'recoil';

export const selectedCardAtom = atom({
  key: 'selectedCardAtom',
  default: {
    isModalopen: false,
    listId: '',
    cardId: '',
  },
});
