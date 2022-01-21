import { Link, useNavigate } from "react-router-dom";
import { Parts } from "../../types";
import styles from "./minifigPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import summarizeBricks from "../../utils/summarizeBricks";

export default function MinifgigPage() {
  const navigate = useNavigate();

  const { bricksList } = summarizeBricks();

  console.log({ bricksList });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Deine Figuren</h1>
        {bricksList?.map((part: Parts) => (
          <article className={styles.card} key={part.partID}>
            <img
              className={styles.image}
              src={part.imageUrlPart}
              alt="ohne Bild"
            />
            <h3 className={styles.quantity}>{part.quantity} x</h3>
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
