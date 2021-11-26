import styles from "./button.module.css";

export default function Button() {
  return (
    <>
      <button className={styles.button}></button>
      <button className={styles.buttonClicked}></button>
    </>
  );
}
