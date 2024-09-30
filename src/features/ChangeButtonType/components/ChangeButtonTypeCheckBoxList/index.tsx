import CheckBox from '@/components/CheckBox';
import { BUTTON_TYPE_LIST } from '@/const/size';
import { useRecoilValue } from 'recoil';
import { Size } from '@/types/button';
import Title from '@/components/Title';
import useButtonType from '../../hooks/useButtonType';
import { buttonTypeState } from '@/stores/buttonType';
import CheckBoxLayout from '@/layouts/CheckBoxes';

type Props = {
  sizes?: Size;
};

function ChangeButtonTypeCheckBoxList({ sizes = 'md' }: Props) {
  const buttonType = useRecoilValue(buttonTypeState);
  const { handleCheckBoxChange } = useButtonType();

  return (
    <>
      <CheckBoxLayout
        titleComponent={<Title text="Button Type" />}
        checkBoxListComponent={BUTTON_TYPE_LIST.map((type, index) => (
          <CheckBox
            key={index}
            size={sizes}
            label={type}
            checked={buttonType === type}
            onChange={() => handleCheckBoxChange(type)}
          />
        ))}
      />
    </>
  );
}

export default ChangeButtonTypeCheckBoxList;
