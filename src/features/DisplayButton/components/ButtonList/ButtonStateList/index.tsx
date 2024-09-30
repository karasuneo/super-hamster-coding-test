import Button from '@/components/Button';
import styles from './styles.module.scss';
import useButtonState from '@/features/DisplayButton/hooks/useButtonState';
import { IconProps } from '@/features/DisplayButton/types/icon';
import { ReactElement } from 'react';
import { Size } from '@/types/size';

type Props = {
  text: string;
  sizes?: Size;
  isDark?: boolean;
  outline?: boolean;
  buttonTitle?: string;
  leftIcon?: ReactElement<IconProps>;
  rightIcon?: ReactElement<IconProps>;
};

function ButtonStateList({
  text,
  sizes,
  isDark = false,
  outline = false,
  leftIcon,
  rightIcon,
}: Props) {
  const { isLoading, handleButtonClick } = useButtonState();

  return (
    <>
      <div className={styles.buttonListContainer}>
        <Button
          text={text}
          size={sizes}
          isDark={isDark}
          outline={outline}
          isLoading={isLoading}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onClick={() => handleButtonClick()}
        />
        <Button
          text={text}
          size={sizes}
          isDark={isDark}
          isLoading={true}
          outline={outline}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onClick={() => handleButtonClick()}
        />
        <Button
          disabled
          text={text}
          size={sizes}
          isDark={isDark}
          outline={outline}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onClick={() => handleButtonClick()}
        />
      </div>
    </>
  );
}

export default ButtonStateList;
