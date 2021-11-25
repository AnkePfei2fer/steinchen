import styles from "./styleguide.module.css";

export default function Styleguide() {
  return (
    <div>
      <section className={styles.brickColors}>
        brick colors
        <div className={styles.redLight}>red-light</div>
        <div className={styles.greenLight}>green-light</div>
        <div className={styles.blueLight}>blue-light</div>
        <div className={styles.redDark}>red-dark</div>
        <div className={styles.greenDark}>green-dark</div>
        <div className={styles.blueDark}>blue-dark</div>
      </section>
      <section className={styles.backgroundShades}>
        shades of background
        <div className={styles.backgroundLight}>lighter</div>
        <div className={styles.background}>background</div>
        <div className={styles.backgroundDark}>darker</div>
      </section>
      <section className={styles.backgroundShades}>
        color theme minifig
        <div className={styles.colorButton}>color-button</div>
        <div className={styles.colorTextPrimary}>color-text-primary</div>
        <div className={styles.colorTextSecondary}>color-text-secondary</div>
      </section>
    </div>
  );
}
