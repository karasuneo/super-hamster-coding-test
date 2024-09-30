import CheckBox from '@/components/CheckBox';
import { SIZE_LIST } from '@/const/button';

import { useRecoilValue } from 'recoil';
import { Size } from '@/types/button';
import { buttonSizeState } from '@/stores/buttonSize';
import Title from '@/components/Title';
import CheckBoxLayout from '@/layouts/CheckBoxes';
import useButtonSize from '../../hooks/useButtonSize';

type Props = {
  sizes?: Size;
};

function ChangeButtonSizeCheckBoxList({ sizes = 'md' }: Props) {
  const buttonSize = useRecoilValue(buttonSizeState);
  const { handleCheckBoxChange } = useButtonSize();

  return (
    <>
      <CheckBoxLayout
        titleComponent={<Title text="Button Size" />}
        checkBoxListComponent={SIZE_LIST.map((size, index) => (
          <CheckBox
            key={index}
            size={sizes}
            label={size}
            checked={buttonSize === size}
            onChange={() => handleCheckBoxChange(size)}
          />
        ))}
      />
    </>
  );
}

export default ChangeButtonSizeCheckBoxList;
