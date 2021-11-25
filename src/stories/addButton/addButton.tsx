import styles from "./addButton.module.css";

export default function AddButton() {
  return (
    <div className={styles.container}>
      <button className={styles.addButton}>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 26.5C12 27.8807 13.1193 29 14.5 29C15.8807 29 17 27.8807 17 26.5V17H26.5C27.8807 17 29 15.8807 29 14.5C29 13.1193 27.8807 12 26.5 12H17V2.5C17 1.11929 15.8807 0 14.5 0C13.1193 0 12 1.11929 12 2.5V12H2.5C1.11929 12 0 13.1193 0 14.5C0 15.8807 1.11929 17 2.5 17H12V26.5Z"
            fill="#0D0D0D"
          />
        </svg>
      </button>
      <button className={styles.addButtonClicked}>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 26.5C12 27.8807 13.1193 29 14.5 29C15.8807 29 17 27.8807 17 26.5V17H26.5C27.8807 17 29 15.8807 29 14.5C29 13.1193 27.8807 12 26.5 12H17V2.5C17 1.11929 15.8807 0 14.5 0C13.1193 0 12 1.11929 12 2.5V12H2.5C1.11929 12 0 13.1193 0 14.5C0 15.8807 1.11929 17 2.5 17H12V26.5Z"
            fill="#0D0D0D"
          />
        </svg>
      </button>
    </div>
  );
}
