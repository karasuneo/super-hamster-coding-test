import { useState } from 'react';

function useButtonSize() {
  const [buttonSize, setButtonSize] = useState<
    'xs' | 'sm' | 'md' | 'lg' | 'xl'
  >('md');

  const onChangeButtonSize = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
    setButtonSize(size);
  };

  return {
    buttonSize,
    onChangeButtonSize,
  };
}

export default useButtonSize;
