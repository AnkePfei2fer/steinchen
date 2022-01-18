import { Link, useNavigate } from "react-router-dom";
import { CollectionProps, Mocs } from "../../types";
import styles from "./ideasPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";

export default function IdeasPage({ collection }: CollectionProps) {
  const navigate = useNavigate();

  //   Extract MOC information of all sets from user collection
  const mocInformation = collection.map((moc) => {
    return [...moc.mocInformation];
  });

  //Combine all arrays with MOC information
  const arrays = mocInformation.flat();
  console.log(arrays);

  arrays?.sort((a, b) => a.nameMoc.localeCompare(b.nameMoc));

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Neue Ideen</h1>
        {arrays.map((moc: Mocs) => (
          <a
            className={styles.card}
            key={moc.numberMoc}
            href={moc.urlMoc}
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3 className={styles.text}>{moc.nameMoc}</h3>
            <img className={styles.image} src={moc.imageUrlMoc} alt="" />
            <div className={styles.overlay}></div>
          </a>
        ))}
      </div>
      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon />
        </div>
        <Link to="/welcome">
          <HomeIcon className={styles.homeIcon} />
        </Link>
      </footer>
    </>
  );
}
