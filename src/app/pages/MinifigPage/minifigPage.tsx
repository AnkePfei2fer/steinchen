import { Link, useNavigate } from "react-router-dom";
import { Minifigs } from "../../types";
import styles from "./minifigPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import summarizeMinifigs from "../../utils/summarizeMinifigs";

export default function MinifgigPage() {
  const navigate = useNavigate();

  const { minifigsList } = summarizeMinifigs();

  console.log({ minifigsList });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Deine Figuren</h1>
        {minifigsList?.map((minifig: Minifigs) => (
          <article className={styles.card} key={minifig.minifigID}>
            <img
              className={styles.image}
              src={minifig.imageUrlMinifig}
              alt="ohne Bild"
            />
            <h3 className={styles.quantity}>{minifig.quantity} x</h3>
          </article>
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
