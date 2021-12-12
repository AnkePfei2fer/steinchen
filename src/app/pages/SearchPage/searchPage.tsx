import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../components/Search/search";
import styles from "./searchPage.module.css";
import useSet from "../../utils/useSet";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";

export default function SearchPage(): JSX.Element {
  const [query, setQuery] = useState<string | null>(null);
  const { searchResult, isLoading } = useSet(query);
  const navigate = useNavigate();

  let content;

  if (searchResult) {
    navigate("/result");
  } else {
    content = (
      <>
        <Search onSearch={setQuery} />
        {!isLoading && (
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
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <ArrowIcon fill="var(--color-brick-red-dark)" />
        </div>
        <nav>
          <Link to="/welcome">
            <HomeIcon fill="var(--color-brick-red-dark)" />
          </Link>
        </nav>
      </footer>
    </div>
  );
}
