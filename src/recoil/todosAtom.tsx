import { atom } from 'recoil';

export const todosAtom = atom({
  key: 'todosAtom',
  default: ['a', 'b', 'c', 'd', 'e', 'f'],
});
