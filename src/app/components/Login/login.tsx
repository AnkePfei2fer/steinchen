import { FormEvent, useEffect, useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

export default function Login(): JSX.Element {
  const [name, setName] = useState(localStorage.getItem("Current User") || "");

  useEffect(() => {
    localStorage.setItem("Current User", name);
  }, [name]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/users/${name}`);
    if (response.ok) {
      console.log(`Hello ${name}`);
    } else {
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });
    }
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={styles.textInput}
        ></input>
        <nav>
          <Link to="/WelcomePage">
            <button type="submit" className={styles.button}>
              Los geht&apos;s!
            </button>
          </Link>
        </nav>
      </form>
    </>
  );
}
