import {
  cloneElement,
  CSSProperties,
  isValidElement,
  ReactElement,
} from 'react';
import localStyles from './styles.module.scss';
import globalStyles from '@/styles/colors.module.scss';

import { BUTTON_FONT_SIZE_MAP, BUTTON_SIZE_MAP } from './const';
import { isUrl } from '@/utils/url';
import { IconProps } from '@/types/icon';
import Spinner from '../Spinner';

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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
    border: outline
      ? `${globalStyles.borderSize} solid ${globalStyles.buttonBorderColor}`
      : 'none',
  };
  const clonedLeftIcon = isValidElement(leftIcon)
    ? cloneElement(leftIcon, { isDark })
    : leftIcon;
  const clonedRightIcon = isValidElement(rightIcon)
    ? cloneElement(rightIcon, { isDark })
    : rightIcon;

  const handleButtonClick = () => {
    if (target && isUrl(target)) {
      window.location.href = target;
    }
    onClick();
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${localStyles.button} ${isDark ? localStyles.dark : localStyles.light} ${isLoading ? localStyles.loading : ''}`}
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
