import { useSetRecoilState } from 'recoil';
import { buttonIconPositionState } from '@/stores/buttonIconPosition';
import { ButtonIconPosition } from '@/types/button';

function useButtonIconPosition() {
  const setButtonIconPosition = useSetRecoilState(buttonIconPositionState);

  const handleCheckBoxChange = (iconPosition: ButtonIconPosition) => {
    setButtonIconPosition(iconPosition);
  };

  return {
    handleCheckBoxChange,
  };
}

export default useButtonIconPosition;
