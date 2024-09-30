import {
  cloneElement,
  CSSProperties,
  isValidElement,
  ReactElement,
} from 'react';
import styles from './styles.module.scss';
import { BUTTON_FONT_SIZE_MAP, BUTTON_SIZE_MAP } from './const';
import { isValidUrl } from '@/utils/url';
import { IconProps } from '@/features/DisplayButton/types/icon';
import Spinner from '../Spinner';
import { Size } from '@/types/button';

type Props = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  isDark?: boolean;
  outline?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactElement<IconProps>;
  rightIcon?: ReactElement<IconProps>;
  size?: Size;
  onClick: () => void;
};

function Button({
  text,
  type = 'button',
  target = undefined,
  isDark = false,
  outline = false,
  disabled = false,
  isLoading = false,
  leftIcon = undefined,
  rightIcon = undefined,
  size = 'md',
  onClick,
}: Props) {
  const buttonStyle: CSSProperties = {
    ...BUTTON_SIZE_MAP[size],
    ...BUTTON_FONT_SIZE_MAP[size],
  };
  const clonedLeftIcon = isValidElement(leftIcon)
    ? cloneElement(leftIcon, { isDark })
    : leftIcon;
  const clonedRightIcon = isValidElement(rightIcon)
    ? cloneElement(rightIcon, { isDark })
    : rightIcon;

  const handleButtonClick = () => {
    if (target && isValidUrl(target)) {
      window.location.href = target;
    }
    onClick();
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${styles.button} ${outline ? styles.outline : styles.noneOutline} ${isDark ? styles.dark : styles.light} ${isLoading ? styles.loading : ''}`}
      style={buttonStyle}
      type={type}
      onClick={handleButtonClick}
    >
      {leftIcon && isLoading && <Spinner s={size} />}
      {leftIcon && !isLoading && clonedLeftIcon}
      {!leftIcon && !rightIcon && isLoading ? <Spinner s={size} /> : text}
      {rightIcon && isLoading && <Spinner s={size} />}
      {rightIcon && !isLoading && clonedRightIcon}
    </button>
  );
}

export default Button;
