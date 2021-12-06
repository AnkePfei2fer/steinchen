import { FormEvent, useEffect, useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const [name, setName] = useState(localStorage.getItem("Current User") || "");

  useEffect(() => {
    localStorage.removeItem("Current User");
  }, [name]);

  const navigate = useNavigate();

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
    localStorage.setItem("Current User", name);
    navigate("/WelcomePage");
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

        <button type="submit" className={styles.button}>
          Los geht&apos;s!
        </button>
      </form>
    </>
  );
}
