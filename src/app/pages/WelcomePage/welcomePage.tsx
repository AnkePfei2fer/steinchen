import styles from "./welcomePage.module.css";
import SetsSrc from "../../../assets/images/House-small.png";
import MinifigSrc from "../../../assets/images/Minifig-small.png";
import BricksSrc from "../../../assets/images/Bricks-small.png";
import ParrotSrc from "../../../assets/images/Parrot-small.png";
import HeadIcon from "../../../assets/icons/HeadIcon";
import LogoutIcon from "../../../assets/icons/LogoutIcon";
import { Link } from "react-router-dom";
import { RefresBricksProps } from "../../types";

export default function WelcomePage({
  onLoadSet,
  onLoadBricks,
  onLoadMinifigs,
}: RefresBricksProps) {
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
        <Link
          className={styles.menuButton}
          to="/bricks"
          onClick={() => {
            onLoadBricks();
          }}
        >
          <img className={styles.bricks} src={BricksSrc} alt="Steine" />
          <h2>Deine Steine</h2>
        </Link>
        <Link
          className={styles.menuButton}
          to="/minifigs"
          onClick={() => {
            onLoadMinifigs();
          }}
        >
          <img className={styles.minifig} src={MinifigSrc} alt="Figur" />
          <h2>Deine Figuren</h2>
        </Link>
        <Link className={styles.menuButton} to="/ideas">
          <img
            className={styles.ideas}
            src={ParrotSrc}
            alt="lustiger Papagei"
          />
          <h2>Neue Ideen</h2>
        </Link>
      </nav>
      <footer className={styles.footer}>
        <Link className={styles.link} to="/search">
          <label className={styles.text}>
            <HeadIcon className={styles.headIcon} />
            Katalog durchsuchen
          </label>
        </Link>
        <Link
          className={styles.link}
          onClick={() => localStorage.removeItem("Current User")}
          to="/"
        >
          <label className={styles.text}>
            <LogoutIcon className={styles.logoutIcon} />
            Logout
          </label>
        </Link>
      </footer>
    </div>
  );
}
