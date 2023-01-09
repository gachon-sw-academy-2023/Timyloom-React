import { atom } from 'recoil';

export const userAtom = atom({
  key: 'user',
  default: [
    { id: 'bwj0509', password: '1q2w3e4r!', confirmPassword: '1q2w3e4r!', name: '백우진', email: 'bwj59@naver.com' },
  ],
});
