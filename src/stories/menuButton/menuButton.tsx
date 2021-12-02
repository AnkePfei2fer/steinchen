import styles from "./menuButton.module.css";

export default function MenuButton() {
  return (
    <button className={styles.button}>
      <img
        className={styles.image}
        src="../src/assets/images/Haus.png"
        alt="Haus"
      />
      <span className={styles.text}>Deine Sets</span>
    </button>
  );
}
