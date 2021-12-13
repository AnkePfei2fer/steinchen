import { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Set } from "../../types";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import BinIcon from "../../../assets/icons/BinIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import styles from "./detailsPage.module.css";
import useCollection from "../../utils/useCollection";
import deleteSetFunction from "../../utils/deleteSet";

export default function DetailsPage() {
  const navigate = useNavigate();
  const params = useParams();

  const sets = useCollection();
  const collection: Set[] = sets.collection;
  const set = collection.find((set) => set.numberSet === params.id);

  const deleteSet = deleteSetFunction(params);

  const handleClick = async function (event: FormEvent) {
    event.preventDefault();
    await deleteSet();
    navigate("/sets");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{set?.nameSet}</h2>
      <img className={styles.image} src={set?.imageUrl} />
      <h3 className={styles.leftColumn}>Set Nummer:</h3>
      <span className={styles.rightColumn}>{set?.numberSet}</span>
      <h3 className={styles.leftColumn}>Thema:</h3>
      <span className={styles.rightColumn}>{set?.nameTheme}</span>
      <h3 className={styles.leftColumn}>Anzahl Teile:</h3>
      <span className={styles.rightColumn}>{set?.numberParts}</span>
      <h3 className={styles.leftColumn}>Erscheinungsjahr:</h3>
      <span className={styles.rightColumn}>{set?.year}</span>
      <div className={styles.overlay}></div>
      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon fill="var(--color-brick-red-dark)" />
        </div>
        <Link to="/welcome">
          <HomeIcon fill="var(--color-brick-red-dark)" />
        </Link>
        <div className={styles.binIcon} onClick={handleClick}>
          <BinIcon fill="none" />
        </div>
      </footer>
    </div>
  );
}
