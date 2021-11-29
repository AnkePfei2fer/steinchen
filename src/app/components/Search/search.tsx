import { FormEvent, useState } from "react";

import styles from "./search.module.css";

type searchResultsProps = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  theme_id: number;
};

export default function Search(): JSX.Element {
  const [query, setQuery] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<searchResultsProps | null>(
    null
  );

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3001/api/sets/search_by_set_number/${query}`
    );
    console.log(response);
    const results = await response.json();
    setSearchResults(results);
    console.log(searchResults);
  };

  let content;

  if (searchResults) {
    content = (
      <div className={styles.card}>
        <span className={styles.text}>{searchResults.name}</span>
        <img className={styles.image} src={searchResults.set_img_url} />
        <p className={styles.theme}>Thema Nummer {searchResults.theme_id}</p>
        <p className={styles.parts}>{searchResults.num_parts} Teile</p>
        <div className={styles.overlay}></div>
      </div>
      // )}else if (query) {content =(
      //   <span>Wir haben das Set leider nicht gefunden. Versuchs nochmal!</span>
    );
  }

  return (
    <div className={styles.container}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.textInput}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button className={styles.button}>Suche</button>
      </form>
      {content}
    </div>
  );
}
