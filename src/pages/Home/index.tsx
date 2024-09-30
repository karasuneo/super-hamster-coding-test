import EditIcon from '@/components/Icon/EditIcon';
import styles from './styles.module.scss';
import ButtonList from '@/features/DisplayButton/components/ButtonList';
import ChangeButtonTypeCheckBoxList from '@/features/ChangeButtonType/components/ChangeButtonTypeCheckBoxList';
import ChangeButtonSizeCheckBoxList from '@/features/ChangeButtonSize/components/CheckBoxList';

function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.darkButtonSection}>
          <div className={styles.buttonListContainer}>
            <ButtonList text="編集" icon={<EditIcon />} />
          </div>
          <div className={styles.checkBoxListContainer}>
            <ChangeButtonSizeCheckBoxList />
            <ChangeButtonTypeCheckBoxList />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
