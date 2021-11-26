import styles from "./textInput.module.css";

export default function TextInput() {
  return (
    <form>
      <input type={"text"} className={styles.textInput}></input>
    </form>
  );
}
