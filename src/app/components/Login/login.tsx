import { FormEvent, useState } from "react";
import styles from "./login.module.css";

export default function Login(): JSX.Element {
  const [name, setName] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        className={styles.textInput}
      ></input>
      <button type="submit" className={styles.button}>
        Los geht&apos;s!
      </button>
    </form>
  );
}
