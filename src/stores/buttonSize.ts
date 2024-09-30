import { Size } from '@/types/button';
import { atom } from 'recoil';

export const buttonSizeState = atom<Size>({
  key: 'buttonSizeState',
  default: 'md',
});
