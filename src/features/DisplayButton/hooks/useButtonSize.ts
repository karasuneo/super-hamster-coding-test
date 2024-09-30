import { Size } from '@/types/size';
import { useState } from 'react';

function useButtonSize() {
  const [buttonSize, setButtonSize] = useState<Size>('md');

  const onChangeButtonSize = (size: Size) => {
    setButtonSize(size);
  };

  return {
    buttonSize,
    onChangeButtonSize,
  };
}

export default useButtonSize;
