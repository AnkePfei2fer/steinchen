import styles from "./loginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>STEINCHEN</span>
      <h3 className={styles.enterName}>Gib Deinen Namen ein</h3>
      <img
        className={styles.minifig}
        src="/../../../src/assets/images/Figur.png"
      />
      <form className={styles.loginForm}>
        <input type={"text"} className={styles.textInput}></input>
        <button className={styles.button}>Los geht&apos;s!</button>
      </form>
      <footer className={styles.footer}>
        <img
          className={styles.bricks}
          src="/../../../src/assets/icons/Bricks-from-Figma.svg"
        />
        <span className={styles.disclaimer}>Haftungsausschluss...</span>
      </footer>
    </div>
  );
}
