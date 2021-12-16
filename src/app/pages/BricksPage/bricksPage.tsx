import { Link, useNavigate } from "react-router-dom";
import { CollectionProps } from "../../types";
import styles from "./bricksPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import { v4 as uuidv4 } from "uuid";
import React from "react";

type Parts = { quantity: string; numberPart: string; imageUrlPart: string };

export default function BricksPage({ collection }: CollectionProps) {
  const navigate = useNavigate();

  //   Extract parts information of all sets from user collection
  console.log({ collection });
  const partsInventory = collection.map((parts) => {
    return [...parts.partsInventory];
  });
  console.log({ partsInventory });

  // Extract individual arrays with parts information --> map instead?
  const array1 = partsInventory[0];
  console.log({ array1 });

  const array2 = partsInventory[3];
  console.log(array2);

  //   combine arrays with parts information (without summing up duplicate entries)
  // const combinedParts = array1.concat(array2);
  // console.log({ combinedParts });

  return (
    <React.Fragment key={uuidv4()}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Deine Steine</h1>
        {array1?.map((part: Parts) => (
          <article className={styles.card} key={uuidv4()}>
            <img className={styles.image} src={part.imageUrlPart} />
            <span className={styles.leftColumn}>Teile Nummer:</span>
            <span className={styles.rightColumn}>{part.numberPart}</span>
            <span className={styles.leftColumn}>Anzahl:</span>
            <span className={styles.rightColumn}>{part.quantity}</span>
          </article>
        ))}
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
      </footer>
    </React.Fragment>
  );
}
