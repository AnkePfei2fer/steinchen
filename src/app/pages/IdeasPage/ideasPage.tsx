import { Link, useNavigate } from "react-router-dom";
import { CollectionProps } from "../../types";
import styles from "./ideasPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import { v4 as uuidv4 } from "uuid";
import React from "react";

type Moc = {
  nameMoc: string;
  imageUrlMoc: string;
  urlMoc: string;
};

export default function IdeasPage({ collection }: CollectionProps) {
  const navigate = useNavigate();

  //   Extract parts information of all sets from user collection
  console.log({ collection });
  const mocInformation = collection.map((moc) => {
    return [...moc.mocInformation];
  });

  //Combine all arrays with parts information
  const arrays = mocInformation.flat();

  return (
    <React.Fragment key={uuidv4()}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Neue Ideen</h1>
        {arrays?.map((moc: Moc) => (
          <article className={styles.card} key={uuidv4()}>
            <img className={styles.image} src={moc.imageUrlMoc} alt="" />
            <h3 className={styles.text}>{moc.nameMoc}</h3>
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
