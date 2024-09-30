import { buttonSizeState } from '@/stores/buttonSize';
import { Size } from '@/types/button';
import { useRecoilState } from 'recoil';

function useSize() {
  const [buttonSize, setButtonSize] = useRecoilState(buttonSizeState);

  const handleCheckBoxChange = (size: Size) => {
    const newSelectedSize = size === buttonSize ? 'md' : size;

    setButtonSize(newSelectedSize);
  };
  return {
    handleCheckBoxChange,
  };
}

export default useSize;
