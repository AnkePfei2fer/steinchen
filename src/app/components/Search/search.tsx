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
    const response = await fetch(
      `http://localhost:3001/api/sets/search_by_set_number/${query}`
    );
    // console.log(response);
    const result = await response.json();
    setSearchResult(result);
    // console.log(searchResult);
    setSearchResultDetails(result.detail);
    // console.log(searchResultDetails);

    // fetch theme from API
    const themeResponse = await fetch(
      `http://localhost:3001/api/theme/search_by_theme_id/${result.theme_id}`
    );
    // console.log(response);
    const themeResult = await themeResponse.json();
    setThemeSearchResult(themeResult);
    console.log(themeSearchResult);
  };

  let content;

  if (searchResult && searchResultDetails === undefined) {
    content = (
      <div className={styles.card}>
        <span className={styles.text}>{searchResult?.name}</span>
        <img className={styles.image} src={searchResult?.set_img_url} />
        <p className={styles.theme}>{themeSearchResult?.name}</p>
        <p className={styles.parts}>{searchResult?.num_parts} Teile</p>
        <div className={styles.overlay}></div>
      </div>
    );
  } else {
    content = (
      <>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.textInput}
            onChange={(event) => setQuery(event.target.value)}
          ></input>
          <button className={styles.button}>Suche</button>
        </form>
        {searchResultDetails === "Not found." &&
          (content = (
            <span className={styles.message}>
              Wir haben Dein Set leider nicht gefunden. Versuchs nochmal!
            </span>
          ))}
      </>
    );
  }

  return <div className={styles.container}>{content}</div>;
}
