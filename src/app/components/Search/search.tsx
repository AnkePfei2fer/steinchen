import { FormEvent, useState } from "react";

import styles from "./search.module.css";

type searchResultProps = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  theme_id: number;
};

export default function Search(): JSX.Element {
  const [query, setQuery] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<searchResultProps | null>(
    null
  );
  const [searchResultDetails, setSearchResultDetails] = useState<
    string | undefined
  >(undefined);
  const [themeSearchResult, setThemeSearchResult] =
    useState<searchResultProps | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/sets/search_by_set_number/${query}`);
    const result = await response.json();
    setSearchResult(result);
    setSearchResultDetails(result.detail);

    // fetch theme from API
    const themeResponse = await fetch(
      `/api/theme/search_by_theme_id/${result.theme_id}`
    );
    const themeResult = await themeResponse.json();
    setThemeSearchResult(themeResult);
  };

  let content;

  if (searchResult && searchResultDetails === undefined) {
    content = (
      <>
        <h1 className={styles.heading}>Gefunden</h1>
        <div className={styles.card}>
          <span className={styles.text}>{searchResult?.name}</span>
          <img className={styles.image} src={searchResult?.set_img_url} />
          <p className={styles.theme}>{themeSearchResult?.name}</p>
          <p className={styles.parts}>{searchResult?.num_parts} Teile</p>
          <div className={styles.overlay}></div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h1 className={styles.heading}>Was suchst Du?</h1>
        <h3>Hast du eine Nummer von Deinem Set?</h3>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.textInput}
            onChange={(event) => setQuery(event.target.value)}
          ></input>
          <button className={styles.button}>Suche</button>
        </form>
        {searchResultDetails === "Not found." && (
          <span className={styles.message}>
            Wir haben Dein Set leider nicht gefunden. Versuchs nochmal!
          </span>
        )}
      </>
    );
  }

  return <div className={styles.container}>{content}</div>;
}
