import styles from './styles.module.scss';
import { ReactNode } from 'react';

type Props = {
  titleComponent: ReactNode;
  checkBoxListComponent: ReactNode;
};

function CheckBoxLayout({ titleComponent, checkBoxListComponent }: Props) {
  return (
    <>
      <div className={styles.checkBoxListContainer}>
        <div className={styles.titleContainer}>{titleComponent}</div>
        <div className={styles.checkBoxContainer}>{checkBoxListComponent}</div>
      </div>
    </>
  );
}

export default CheckBoxLayout;
