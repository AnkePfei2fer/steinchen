import { FormEvent, useState } from "react";

import styles from "./search.module.css";

export default function Search() {
const [query, setQuery] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3001/api/sets/search_by_set_number/${query}`
    );
    console.log(response);
    const results = await response.json();
    console.log(results);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input type={"text"} className={styles.textInput} onChange={(event)=>setQuery(event.target.value)}></input>
      <button className={styles.button}>Suche</button>
    </form>
  );
}
