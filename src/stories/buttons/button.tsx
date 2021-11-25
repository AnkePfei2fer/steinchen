import styles from "./button.module.css";

export default function Button() {
  return (
    <div>
      <button className={styles.button}></button>
      <button className={styles.buttonClicked}></button>
    </div>
  );
}
