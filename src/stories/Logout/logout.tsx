import styles from "./logout.module.css";

export default function Logout() {
  return (
    <label className={styles.text}>
      <svg
        width="43"
        height="38"
        viewBox="0 0 43 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.icon}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.2322 20.7678L17.1421 36.6777C18.1184 37.654 19.7013 37.654 20.6776 36.6777C21.654 35.7014 21.654 34.1184 20.6776 33.1421L9.0355 21.5L33 21.5C34.3807 21.5 35.5 20.3807 35.5 19C35.5 17.6193 34.3807 16.5 33 16.5L9.0355 16.5L20.6776 4.85787C21.6539 3.88155 21.6539 2.29864 20.6776 1.32233C19.7013 0.346021 18.1184 0.346021 17.1421 1.32233L1.2322 17.2322C0.255894 18.2085 0.255894 19.7915 1.2322 20.7678ZM25.5 4C24.1193 4 23 5.11929 23 6.5C23 7.88071 24.1193 9 25.5 9H38V29H24.9886C23.6079 29 22.4886 30.1193 22.4886 31.5C22.4886 32.8807 23.6079 34 24.9886 34H39.9886C40.0749 34 40.1602 33.9956 40.2443 33.9871C40.3284 33.9956 40.4137 34 40.5 34C41.8807 34 43 32.8807 43 31.5V6.5C43 5.11929 41.8807 4 40.5 4H25.5Z"
        />
      </svg>
      Logout
    </label>
  );
}
