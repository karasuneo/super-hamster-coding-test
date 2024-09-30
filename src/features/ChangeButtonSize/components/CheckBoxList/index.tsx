import CheckBox from '@/components/CheckBox';
import { SIZE_LIST } from '@/const/size';

import { useRecoilValue } from 'recoil';
import { Size } from '@/types/button';
import { buttonSizeState } from '@/stores/buttonSize';
import Title from '@/components/Title';
import useSize from '../../hooks/useSize';
import CheckBoxLayout from '@/layouts/CheckBoxes';

type Props = {
  sizes?: Size;
};

function ChangeButtonSizeCheckBoxList({ sizes = 'md' }: Props) {
  const buttonSize = useRecoilValue(buttonSizeState);
  const { handleCheckBoxChange } = useSize();

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
