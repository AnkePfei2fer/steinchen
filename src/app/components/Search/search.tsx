// import { FormEvent } from "react";

import styles from "./search.module.css";

export default function Search() {
  //   const handleSubmit = async (event: FormEvent) => {
  //     event.preventDefault();
  //     const response = await fetch(`/api/sets/search_by_set_number`);
  //     const results = await response.json();
  //     console.log(results);
  //   };

  return (
    <form>
      <input type={"text"} className={styles.textInput}></input>
    </form>
  );
}
