import styles from "./loginPage.module.css";
import Login from "../../components/Login/login";
import MinifigSrc from "../../../assets/images/Minifig-small.png";
import BricksSrc from "../../../assets/icons/Bricks.svg";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.S}>S</span>
        <span className={styles.T}>T</span>
        <span className={styles.E}>E</span>
        <span className={styles.I}>I</span>
        <span className={styles.N}>N</span>
        <span className={styles.C}>C</span>
        <span className={styles.H}>H</span>
        <span className={styles.E}>E</span>
        <span className={styles.N}>N</span>
      </div>
      <h3 className={styles.enterName}>Gib Deinen Namen ein</h3>
      <img className={styles.minifig} src={MinifigSrc} alt="" />
      <Login />
      <footer className={styles.footer}>
        <img className={styles.bricks} src={BricksSrc} />
        <span className={styles.disclaimer}>Haftungsausschluss...</span>
      </footer>
    </div>
  );
}
