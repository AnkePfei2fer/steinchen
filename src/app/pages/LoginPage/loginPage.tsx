import styles from "./loginPage.module.css";
import Login from "../../components/Login/login";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>STEINCHEN</span>
      <h3 className={styles.enterName}>Gib Deinen Namen ein</h3>
      <img
        className={styles.minifig}
        src="/../../../src/assets/images/Figur.png"
      />
      <Login />
      <footer className={styles.footer}>
        <img
          className={styles.bricks}
          src="/../../../src/assets/icons/Bricks-from-Figma.svg"
        />
        <span className={styles.disclaimer}>Haftungsausschluss...</span>
      </footer>
    </div>
  );
}
