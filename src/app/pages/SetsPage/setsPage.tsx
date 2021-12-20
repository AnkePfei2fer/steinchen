import { Link, useNavigate } from "react-router-dom";
import { Set } from "../../types";
import styles from "./setsPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";

type CollectionProps = { collection: Set[] };

export default function SetsPage({ collection }: CollectionProps) {
  const navigate = useNavigate();

  collection?.sort((a, b) => a.nameSet.localeCompare(b.nameSet));

  return (
    <>
      <div>
        <h1 className={styles.heading}>Deine Sets</h1>
        <nav className={styles.container}>
          {collection.map((set: Set) => (
            <Link
              className={styles.card}
              key={set.numberSet}
              to={`/sets/${set.numberSet}`}
            >
              <span className={styles.text}>{set.nameSet}</span>
              <img className={styles.image} src={set.imageUrlSet} />
              <div className={styles.overlay}></div>
            </Link>
          ))}
        </nav>
      </div>
      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon fill="var(--color-brick-red-dark)" />
        </div>
        <nav>
          <Link to="/welcome">
            <HomeIcon fill="var(--color-brick-red-dark)" />
          </Link>
        </nav>
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
