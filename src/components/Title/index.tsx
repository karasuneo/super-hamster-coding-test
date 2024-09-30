import { Size } from '@/types/button';
import styles from './styles.module.scss';
import { CSSProperties } from 'react';
import { FONT_SIZE_MAP } from './const';

type Props = {
  text: string;
  size?: Size;
};

function Title({ text, size = 'md' }: Props) {
  const titleStyle: CSSProperties = {
    ...FONT_SIZE_MAP[size],
  };

  return (
    <h2 style={titleStyle} className={styles.title}>
      {text}
    </h2>
  );
}

export default Title;
