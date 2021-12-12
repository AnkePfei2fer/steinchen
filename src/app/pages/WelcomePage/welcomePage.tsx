import styles from "./welcomePage.module.css";
import SetsSrc from "../../../assets/images/Haus.png";
import BricksSrc from "../../../assets/images/Haufen.png";
import ParrotSrc from "../../../assets/images/Papagei.png";
import HeadIcon from "../../../assets/icons/HeadIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const username = localStorage.getItem("Current User");

  return (
    <div className={styles.container}>
      <h1>Hallo {username}</h1>
      <nav>
        <Link className={styles.link} to="/sets">
          <button className={styles.menuButton}>
            <img className={styles.sets} src={SetsSrc} alt="Häuschen" />
            <h2>Deine Sets</h2>
          </button>
        </Link>
      </nav>
      <button className={styles.menuButton}>
        <img className={styles.bricks} src={BricksSrc} alt="Steine" />
        <h2>Deine Steine</h2>
      </button>
      <button className={styles.menuButton}>
        <img className={styles.ideas} src={ParrotSrc} alt="Papagei" />
        <h2>Neue Ideen</h2>
      </button>
      <footer className={styles.footer}>
        <nav>
          <Link className={styles.link} to="/search">
            <label className={styles.text}>
              <HeadIcon fill="var(--color-brick-red-dark)" />
              Katalog durchsuchen
            </label>
          </Link>
        </nav>
        <nav>
          <Link
            className={styles.link}
            onClick={() => localStorage.removeItem("Current User")}
            to="/"
          >
            <label className={styles.text}>
              <LogoutIcon fill="var(--color-brick-red-dark)" />
              Logout
            </label>
          </Link>
        </nav>
      </footer>
    </div>
  );
}
