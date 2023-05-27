import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_text}>Доктор печатает</div>
      <div className={styles.loader_dots}>
        <div className={styles.loader_first_dot}></div>
        <div className={styles.loader_second_dot}></div>
        <div className={styles.loader_third_dot}></div>
      </div>
    </div>
  );
};

export default Loader;
