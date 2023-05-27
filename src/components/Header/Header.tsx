import styles from "./Header.module.css";
import Logo from "../../assets/images/logo.png";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} className={styles.logo_img} alt="logo" />
        <h1 className={styles.logo_title}>AI. Doctor</h1>
      </div>

      <div className={styles.socials}>
        <a className={styles.social_link} href="https://telegram.org">
          <BsTelegram size="36" />
        </a>

        <a className={styles.social_link} href="https://instagram.com">
          <BsInstagram size="36" />
        </a>
      </div>
    </header>
  );
};

export default Header;
