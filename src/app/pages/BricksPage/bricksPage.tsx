import { useNavigate } from "react-router-dom";
import { Set, CollectionProps } from "../../types";
import styles from "./bricksPage.module.css";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";

type Parts = {
  quantity: number;
  part: object;
};

export default function BricksPage({ collection }: CollectionProps) {
  const navigate = useNavigate();

  //   Extract parts information of all sets from user collection
  console.log({ collection });
  const parts = collection.map((parts) => {
    return [...parts.parts];
  });
  console.log({ parts });

  //   Extract individual arrays with parts information
  const array1 = parts[0];
  console.log({ array1 });

  const array2 = parts[1];
  console.log({ array2 });

  //   combine arrays with parts information (without summing up duplicate entries)
  const combinedParts = array1.concat(array2);
  console.log({ combinedParts });

  //   const partDetail = combinedParts.map((partDetail) => {
  //     return partDetail.part_img_url;
  //   });
  //   console.log({ partDetail });

  return (
    <>
      <div>
        <h1 className={styles.heading}>Deine Steine</h1>
        {/* <nav className={styles.container}>
          {combinedParts.map((part: Parts) => (
            <article className={styles.card} key={parts.quantity}>
              <span className={styles.text}>{set.nameSet}</span>
              <img className={styles.image} src={set.imageUrl} />
            </article>
          ))}
        </nav> */}
      </div>
      <footer className={styles.footer}>
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon fill="var(--color-brick-red-dark)" />
        </div>
        <nav>
          <article to="/welcome">
            <HomeIcon fill="var(--color-brick-red-dark)" />
          </article>
        </nav>
      </footer>
    </>
  );
}
