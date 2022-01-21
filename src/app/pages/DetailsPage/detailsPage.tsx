import { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Set } from "../../types";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import BinIcon from "../../../assets/icons/BinIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import styles from "./detailsPage.module.css";
import deleteSetFunction from "../../utils/deleteSet";

type DetailsPageProps = { collection: Set[]; onLoadSet: () => void };

export default function DetailsPage({
  collection,
  onLoadSet,
}: DetailsPageProps) {
  const navigate = useNavigate();
  const params = useParams();

  const set = collection.find((set) => set.numberSet === params.id);

  const deleteSet = deleteSetFunction(params.id);

  const handleClick = async function (event: FormEvent) {
    event.preventDefault();
    try {
      await deleteSet();
    } catch (error) {
      console.error(error);
    }
    onLoadSet();
    navigate("/sets");
  };

  const numberMinifigs: number | undefined = set?.minifigInformation.length;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{set?.nameSet}</h2>
      <img className={styles.image} src={set?.imageUrlSet} alt="" />
      <h3 className={styles.leftColumn}>Nummer:</h3>
      <span className={styles.rightColumn}>{set?.numberSet}</span>
      <h3 className={styles.leftColumn}>Thema:</h3>
      <span className={styles.rightColumn}>{set?.nameTheme}</span>
      <h3 className={styles.leftColumn}>Erscheinungsjahr:</h3>
      <span className={styles.rightColumn}>{set?.year}</span>
      <h3 className={styles.leftColumn}>Steine:</h3>
      <span className={styles.rightColumn}>{set?.numberPartsSet}</span>
      <h3 className={styles.leftColumn}>Figuren:</h3>
      <span className={styles.rightColumn}>{numberMinifigs}</span>
      <div className={styles.overlay}></div>
      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon />
        </div>
        <Link to="/welcome">
          <HomeIcon className={styles.homeIcon} />
        </Link>
        <div className={styles.binIcon} onClick={handleClick}>
          <BinIcon className={styles.binIcon} onClick={handleClick} />
        </div>
      </footer>
    </div>
  );
}
