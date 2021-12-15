import styles from "./welcomePage.module.css";
import SetsSrc from "../../../assets/images/Haus.png";
import BricksSrc from "../../../assets/images/Haufen.png";
import ParrotSrc from "../../../assets/images/Papagei.png";
import HeadIcon from "../../../assets/icons/HeadIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import { Link } from "react-router-dom";
import { RefreshPageProps } from "../../types";

export default function WelcomePage({ onLoadSet }: RefreshPageProps) {
  const username = localStorage.getItem("Current User");

  return (
    <div>
      <h1>Hallo {username}</h1>
      <nav className={styles.container}>
        <Link
          className={styles.menuButton}
          to="/sets"
          onClick={() => {
            onLoadSet();
          }}
        >
          <img className={styles.sets} src={SetsSrc} alt="Häuschen" />
          <h2>Deine Sets</h2>
        </Link>
        <Link className={styles.menuButton} to="">
          <img className={styles.bricks} src={BricksSrc} alt="Steine" />
          <h2>Deine Steine</h2>
        </Link>
        <Link className={styles.menuButton} to="">
          <img className={styles.ideas} src={ParrotSrc} alt="Papagei" />
          <h2>Neue Ideen</h2>
        </Link>
      </nav>
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
