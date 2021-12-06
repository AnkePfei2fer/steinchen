import { useState } from "react";

import styles from "./search.module.css";

type SearchInputProps = { onSearch: (search: string) => void };

export function Search({ onSearch }: SearchInputProps): JSX.Element {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Was suchst Du?</h1>
      <h3>Hast du eine Nummer von Deinem Set?</h3>
      <form
        className={styles.searchForm}
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(search);
        }}
      >
        <input
          type="text"
          className={styles.textInput}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button className={styles.button}>Suche</button>
      </form>
    </div>
  );
}
