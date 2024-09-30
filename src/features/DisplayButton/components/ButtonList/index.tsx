import styles from './styles.module.scss';
import ButtonStateList from './ButtonStateList';
import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { buttonSizeState } from '@/stores/buttonSize';
import { buttonTypeState } from '@/stores/buttonType';
import { buttonIconPositionState } from '@/stores/buttonIconPosition';
import useWidth from '@/hooks/useWidth';
type Props = {
  text: string;
  icon: ReactElement;
};

function ButtonList({ text, icon }: Props) {
  const buttonSize = useRecoilValue(buttonSizeState);
  const buttonType = useRecoilValue(buttonTypeState);
  const buttonIconPosition = useRecoilValue(buttonIconPositionState);
  const { isBelowBreakpoint } = useWidth();

  return (
    <>
      <div className={styles.buttonStateListContainer}>
        <div
          style={{
            display: `${!isBelowBreakpoint('md') || buttonIconPosition === 'none' ? 'block' : 'none'} `,
          }}
        >
          <ButtonStateList
            text={text}
            sizes={buttonSize}
            isDark={buttonType === 'dark' ? true : false}
            outline={buttonType === 'outline' ? true : false}
          />
        </div>
        <div
          style={{
            display: `${!isBelowBreakpoint('md') || buttonIconPosition === 'left' ? 'block' : 'none'}`,
          }}
        >
          <ButtonStateList
            text={text}
            sizes={buttonSize}
            isDark={buttonType === 'dark' ? true : false}
            outline={buttonType === 'outline' ? true : false}
            leftIcon={icon}
          />
        </div>
        <div
          style={{
            display: `${!isBelowBreakpoint('md') || buttonIconPosition === 'right' ? 'block' : 'none'}`,
          }}
        >
          <ButtonStateList
            text={text}
            sizes={buttonSize}
            isDark={buttonType === 'dark' ? true : false}
            outline={buttonType === 'outline' ? true : false}
            rightIcon={icon}
          />
        </div>
      </div>
    </>
  );
}

export default ButtonList;
