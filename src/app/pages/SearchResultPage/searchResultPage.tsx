import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./searchResultPage.module.css";
import useSet from "../../utils/useSet";
import postSet from "../../utils/postSet";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";
import { RefreshPageProps } from "../../types";

export default function SearchResultPage({
  onLoadSet,
}: RefreshPageProps): JSX.Element {
  const query = localStorage.getItem("Search Query");
  const navigate = useNavigate();
  const { searchResult } = useSet(query);
  console.log({ searchResult });

  const numberSet = searchResult?.numberSet;
  const nameSet = searchResult?.nameSet;
  const numberParts = searchResult?.numberParts;
  const year = searchResult?.year;
  const imageUrlSet = searchResult?.imageUrlSet;
  const nameTheme = searchResult?.nameTheme;
  const partsInventory = searchResult?.partsInventory;
  console.log({ imageUrlSet });

  const set = {
    numberSet,
    nameSet,
    numberParts,
    year,
    imageUrlSet,
    nameTheme,
    partsInventory,
  };

  const postNewSet = postSet(set);

  const handleClick = async function (event: FormEvent) {
    event.preventDefault();
    await postNewSet();
    onLoadSet();
    navigate("/sets");
  };

  if (!searchResult) {
    return <span>Wir suchen Dein Set...</span>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Gefunden</h1>
      <div className={styles.card}>
        <span className={styles.text}>{nameSet}</span>
        <img className={styles.image} src={imageUrlSet} alt="" />
        <p className={styles.theme}>{nameTheme}</p>
        <p className={styles.parts}>{numberParts} Teile</p>
        <div className={styles.overlay}></div>
        <button className={styles.addButton} onClick={handleClick}>
          <PlusIcon fill="var(--color-text-primary)" />
        </button>
      </div>
      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon />
        </div>
        <Link to="/welcome">
          <HomeIcon className={styles.homeIcon} />
        </Link>
      </footer>
    </div>
  );
}
