import { Link, useNavigate } from "react-router-dom";
import { Parts } from "../../types";
import styles from "./bricksPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import summarizeBricks from "../../utils/summarizeBricks";

export default function BricksPage() {
  const navigate = useNavigate();

  const { bricksList } = summarizeBricks();

  console.log({ bricksList });

  return (
    <React.Fragment key={uuidv4()}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Deine Steine</h1>
        {bricksList?.map((part: Parts) => (
          <article className={styles.card} key={uuidv4()}>
            <img className={styles.image} src={part.imageUrlPart} alt="" />
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
    </React.Fragment>
  );
}
