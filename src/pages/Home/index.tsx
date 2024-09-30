import EditIcon from '@/components/Icon/EditIcon';
import styles from './styles.module.scss';
import ButtonList from '@/features/DisplayButton/components/ButtonList';

function Home() {
  return (
    <>
      <div className={styles.buttonListContainer}>
        <section className={styles.buttonListSection}>
          <ButtonList isDark text="編集" icon={<EditIcon />} />
          <ButtonList text="編集" icon={<EditIcon />} />
          <ButtonList outline text="編集" icon={<EditIcon />} />
        </section>
      </div>
    </>
  );
}

export default Home;
