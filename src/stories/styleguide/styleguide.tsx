import styles from "./styleguide.module.css";

export default function Styleguide() {
  return (
    <div>
      <div className={styles.brickColors}>
        brick colors
        <div className={styles.redLight}>red-light</div>
        <div className={styles.greenLight}>green-light</div>
        <div className={styles.blueLight}>blue-light</div>
        <div className={styles.redDark}>red-dark</div>
        <div className={styles.greenDark}>green-dark</div>
        <div className={styles.blueDark}>blue-dark</div>
      </div>
    </div>
  );
}
