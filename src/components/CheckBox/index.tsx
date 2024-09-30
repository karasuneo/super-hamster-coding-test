import { Size } from '@/types/button';
import styles from './styles.module.scss';
import { CSSProperties } from 'react';
import { CHECK_BOX_SIZE_MAP, CHECK_MARK_SIZE_MAP } from './const';

type Props = {
  size: Size;
  label: string;
  checked: boolean;
  onChange: () => void;
};

function CheckBox({ label, checked, onChange }: Props) {
  const checkBoxStyle: CSSProperties = {
    ...CHECK_BOX_SIZE_MAP['xl'],
  };

  const checkMarkStyle: CSSProperties = {
    ...CHECK_MARK_SIZE_MAP['xl'],
  };

  return (
    <label style={checkBoxStyle} className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={() => onChange()} />
      <span style={checkMarkStyle} className={styles.checkMark}></span>
      {label}
    </label>
  );
}

export default CheckBox;
