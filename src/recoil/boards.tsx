import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { boardsDummy } from '@/recoil/boardsDummy';

const { persistAtom } = recoilPersist();

export const boardsAtom = atom({
  key: 'boardsAtom',
  effects_UNSTABLE: [persistAtom],
  default: [],
});
