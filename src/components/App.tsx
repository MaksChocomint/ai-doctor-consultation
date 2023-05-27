import styles from "./App.module.css";
import Header from "./Header/Header";
import Dialog from "./Dialog/Dialog";

const App = () => {
  return (
    <main className={styles.app}>
      <Header />
      <Dialog />
    </main>
  );
};

export default App;
