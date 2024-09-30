import { buttonSizeState } from '@/stores/buttonSize';
import { Size } from '@/types/button';
import { useSetRecoilState } from 'recoil';

function useButtonSize() {
  const setButtonSize = useSetRecoilState(buttonSizeState);

  const handleCheckBoxChange = (size: Size) => {
    setButtonSize(size);
  };
  return {
    handleCheckBoxChange,
  };
}

export default useButtonSize;
