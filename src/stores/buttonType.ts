import { ButtonType } from '@/types/button';
import { atom } from 'recoil';

export const buttonTypeState = atom<ButtonType>({
  key: 'buttonTypeState',
  default: 'normal',
});
