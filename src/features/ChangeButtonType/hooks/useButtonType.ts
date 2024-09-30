import { buttonTypeState } from '@/stores/buttonType';
import { ButtonType } from '@/types/button';
import { useSetRecoilState } from 'recoil';

function useButtonType() {
  const setButtonType = useSetRecoilState(buttonTypeState);

  const handleCheckBoxChange = (buttonType: ButtonType) => {
    setButtonType(buttonType);
  };

  return {
    handleCheckBoxChange,
  };
}

export default useButtonType;
