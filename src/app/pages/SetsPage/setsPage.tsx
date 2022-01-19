import { Link, useNavigate } from "react-router-dom";
import { Set, CollectionProps } from "../../types";
import styles from "./setsPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";

export default function SetsPage({ collection }: CollectionProps) {
  const navigate = useNavigate();

  collection?.sort((a, b) => a.nameSet.localeCompare(b.nameSet));

  return (
    <>
      <div>
        <h1 className={styles.heading}>Deine Sets</h1>
        <nav className={styles.container}>
          {collection?.map((set: Set) => (
            <Link
              className={styles.card}
              key={set.numberSet}
              to={`/sets/${set.numberSet}`}
            >
              <span className={styles.text}>{set.nameSet}</span>
              <img className={styles.image} src={set.imageUrlSet} alt="" />
              <div className={styles.overlay}></div>
            </Link>
          ))}
        </nav>
      </div>
      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon />
        </div>
        <Link to="/welcome">
          <HomeIcon className={styles.homeIcon} />
        </Link>
        <button
          className={styles.addButton}
          onClick={() => navigate("/search")}
        >
          <PlusIcon fill="var(--color-text-primary)" width="25" height="25" />
        </button>
      </footer>
    </>
  );
}
