import styles from './styles.module.scss';
import ButtonStateList from './ButtonStateList';
import { ReactElement } from 'react';

type Props = {
  text: string;
  isDark?: boolean;
  outline?: boolean;
  buttonTitle?: string;
  icon: ReactElement;
};

function ButtonList({ text, isDark = false, outline = false, icon }: Props) {
  return (
    <>
      <div className={styles.buttonStateListContainer}>
        <ButtonStateList text={text} isDark={isDark} outline={outline} />
        <ButtonStateList
          text={text}
          isDark={isDark}
          outline={outline}
          leftIcon={icon}
        />
        <ButtonStateList
          text={text}
          isDark={isDark}
          outline={outline}
          rightIcon={icon}
        />
      </div>
    </>
  );
}

export default ButtonList;
