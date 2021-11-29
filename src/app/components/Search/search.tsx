import { FormEvent } from "react";

import styles from "./search.module.css";

export default function Search() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3001/api/sets/search_by_set_number`
    );
    console.log(response);
    const results = await response.json();
    console.log(results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} className={styles.textInput}></input>
      <button className={styles.button}>Suche</button>
    </form>
  );
}
