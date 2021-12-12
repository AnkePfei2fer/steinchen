import { Link, useNavigate } from "react-router-dom";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import BinIcon from "../../../assets/icons/BinIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import styles from "./detailsPage.module.css";

export default function DetailsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Belle&apos;s Storybook Adventures</h2>
      <img className={styles.image} src="../src/assets/images/Biest.png" />
      <h3 className={styles.leftColumn}>Set Nummer:</h3>
      <span className={styles.rightColumn}>43177-1</span>
      <h3 className={styles.leftColumn}>Thema:</h3>
      <span className={styles.rightColumn}>Disney Princess</span>
      <h3 className={styles.leftColumn}>Anzahl Teile:</h3>
      <span className={styles.rightColumn}>111</span>
      <h3 className={styles.leftColumn}>Erscheinungsjahr:</h3>
      <span className={styles.rightColumn}>2020</span>
      <div className={styles.overlay}></div>

      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon fill="var(--color-brick-red-dark)" />
        </div>
        <Link to="/welcome">
          <HomeIcon fill="var(--color-brick-red-dark)" />
        </Link>
        <BinIcon fill="none" />
      </footer>
    </div>
  );
}
