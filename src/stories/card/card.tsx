import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <span className={styles.text}>Belle&apos;s Storybook Adventures</span>
      <img className={styles.image} src="../src/assets/images/Biest.png" />
      <p className={styles.theme}>Disney Princess</p>
      <p className={styles.parts}>111 Teile</p>
      <div className={styles.overlay}></div>
    </div>
  );
}
