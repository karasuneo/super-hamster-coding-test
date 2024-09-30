import CheckBox from '@/components/CheckBox';
import { useRecoilValue } from 'recoil';
import { Size } from '@/types/button';
import Title from '@/components/Title';
import CheckBoxLayout from '@/layouts/CheckBoxes';
import { buttonIconPositionState } from '@/stores/buttonIconPosition';
import styles from './styles.module.scss';
import useButtonIconPosition from '../../hooks/useButtonIcon';
import { BUTTON_ICON_POSITION_LIST } from '@/const/button';
import useWidth from '@/hooks/useWidth';

type Props = {
  sizes?: Size;
};

function ChangeButtonIconPositionCheckBoxList({ sizes = 'md' }: Props) {
  const buttonIconPosition = useRecoilValue(buttonIconPositionState);
  const { isBelowBreakpoint } = useWidth();
  const { handleCheckBoxChange } = useButtonIconPosition();

  return (
    <>
      <div
        style={{
          display: `${isBelowBreakpoint('md') ? 'block' : 'none'} `,
        }}
        className={styles.checkBoxListContainer}
      >
        <CheckBoxLayout
          titleComponent={<Title text="Button Icon" />}
          checkBoxListComponent={BUTTON_ICON_POSITION_LIST.map(
            (iconPosition, index) => (
              <CheckBox
                key={index}
                size={sizes}
                label={iconPosition}
                checked={buttonIconPosition === iconPosition}
                onChange={() => handleCheckBoxChange(iconPosition)}
              />
            ),
          )}
        />
      </div>
    </>
  );
}

export default ChangeButtonIconPositionCheckBoxList;
