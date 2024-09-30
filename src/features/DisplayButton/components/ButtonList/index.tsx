import styles from './styles.module.scss';
import ButtonStateList from './ButtonStateList';
import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { buttonSizeState } from '@/stores/buttonSize';
import { buttonTypeState } from '@/stores/buttonType';

type Props = {
  text: string;
  icon: ReactElement;
};

function ButtonList({ text, icon }: Props) {
  const buttonSize = useRecoilValue(buttonSizeState);
  const buttonType = useRecoilValue(buttonTypeState);
  return (
    <>
      <div className={styles.buttonStateListContainer}>
        <ButtonStateList
          text={text}
          sizes={buttonSize}
          isDark={buttonType === 'dark' ? true : false}
          outline={buttonType === 'outline' ? true : false}
        />
        <ButtonStateList
          text={text}
          sizes={buttonSize}
          isDark={buttonType === 'dark' ? true : false}
          outline={buttonType === 'outline' ? true : false}
          leftIcon={icon}
        />
        <ButtonStateList
          text={text}
          sizes={buttonSize}
          isDark={buttonType === 'dark' ? true : false}
          outline={buttonType === 'outline' ? true : false}
          rightIcon={icon}
        />
      </div>
    </>
  );
}

export default ButtonList;
