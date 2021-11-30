import styles from "./login.module.css";

export default function Login() {
  return (
    <form className={styles.loginForm}>
      <input type={"text"} className={styles.textInput}></input>
      <button className={styles.button}>Los geht&apos;s!</button>
    </form>
  );
}
