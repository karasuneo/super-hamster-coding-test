import { ButtonIconPosition } from '@/types/button';
import { atom } from 'recoil';

export const buttonIconPositionState = atom<ButtonIconPosition>({
  key: 'buttonIconPositionState',
  default: 'none',
});
