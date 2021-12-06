import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "../../components/Search/search";
import styles from "./searchPage.module.css";
import useSet from "../../utils/useSet";

export default function SearchPage(): JSX.Element {
  const [query, setSearch] = useState("");
  const { searchResult, themeSearchResult, searchResultDetail } = useSet(query);

  const navigate = useNavigate();

  let content;

  if (searchResult && searchResultDetail === undefined) {
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
        <Search onSearch={setSearch} />
        {searchResultDetail === "Not found." && (
          <span className={styles.message}>
            Wir haben Dein Set leider nicht gefunden. Versuchs nochmal!
          </span>
        )}
      </>
    );
  }

  return (
    <div className={styles.container}>
      {content}
      <footer className={styles.footer}>
        <div className={styles.backButton} onClick={() => navigate(-1)}>
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.icon}
              d="M25 14.75C25.9665 14.75 26.75 13.9665 26.75 13C26.75 12.0335 25.9665 11.25 25 11.25V14.75ZM0.762564 11.7626C0.0791461 12.446 0.0791461 13.554 0.762564 14.2374L11.8995 25.3744C12.5829 26.0578 13.691 26.0578 14.3744 25.3744C15.0578 24.691 15.0578 23.5829 14.3744 22.8995L4.47487 13L14.3744 3.10051C15.0578 2.41709 15.0578 1.30905 14.3744 0.625631C13.691 -0.0577862 12.5829 -0.0577862 11.8995 0.625631L0.762564 11.7626ZM25 11.25L2 11.25V14.75L25 14.75V11.25Z"
            />
          </svg>
        </div>
        <nav>
          <Link to="/WelcomePage">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles.icon}
                  d="M18.8933 3.75498C19.1983 3.48413 19.592 3.33453 20 3.33453C20.4079 3.33453 20.8016 3.48413 21.1066 3.75498L36.1066 17.0883C36.4202 17.3862 36.6057 17.7943 36.6239 18.2263C36.6422 18.6584 36.4917 19.0807 36.2044 19.4039C35.9171 19.7272 35.5154 19.9261 35.0841 19.9586C34.6529 19.9912 34.2259 19.8548 33.8933 19.5783L33.3333 19.0833V31.6666C33.3333 32.5507 32.9821 33.3985 32.357 34.0237C31.7319 34.6488 30.884 35 30 35H9.99996C9.1159 35 8.26806 34.6488 7.64294 34.0237C7.01782 33.3985 6.66663 32.5507 6.66663 31.6666V19.0833L6.10663 19.5783C5.77406 19.8548 5.34704 19.9912 4.91579 19.9586C4.48454 19.9261 4.08282 19.7272 3.7955 19.4039C3.50818 19.0807 3.35775 18.6584 3.376 18.2263C3.39425 17.7943 3.57974 17.3862 3.89329 17.0883L18.8933 3.75498ZM9.99996 16.1166V31.6666H15V23.3333C15 22.8913 15.1756 22.4674 15.4881 22.1548C15.8007 21.8422 16.2246 21.6666 16.6666 21.6666H23.3333C23.7753 21.6666 24.1992 21.8422 24.5118 22.1548C24.8244 22.4674 25 22.8913 25 23.3333V31.6666H30V16.1183L20 7.22998L9.99996 16.1183V16.1166ZM21.6666 31.6666V25H18.3333V31.6666H21.6666Z"
                />
              </svg>
            </div>
          </Link>
        </nav>
      </footer>
    </div>
  );
}
