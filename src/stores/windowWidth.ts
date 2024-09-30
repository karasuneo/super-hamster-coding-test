import { atom } from 'recoil';

export const windowWidthState = atom<number>({
  key: 'windowWidthState',
  default: window.innerWidth,
});
