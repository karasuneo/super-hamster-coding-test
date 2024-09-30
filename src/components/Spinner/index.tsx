import { Size } from '@/types/button';
import { LOADING_SIZE_MAP } from '../Button/const';
import styles from './styles.module.scss';

type Props = {
  isDark?: boolean;
  s: Size;
};

function Spinner({ isDark = false, s }: Props) {
  const loaderStyle = {
    ...LOADING_SIZE_MAP[s],
  };

  return (
    <span
      style={loaderStyle}
      className={`${styles.spinner} ${isDark ? styles.dark : styles.light}`}
    ></span>
  );
}

export default Spinner;
