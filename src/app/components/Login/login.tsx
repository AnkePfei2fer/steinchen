import { FormEvent, useEffect, useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const [username, setUsername] = useState(
    localStorage.getItem("Current User") || ""
  );

  useEffect(() => {
    localStorage.removeItem("Current User");
  }, [username]);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(`/api/users/${username}`);
    if (!response.ok) 
     {
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username }),
      });
    }
    localStorage.setItem("Current User", username);
    navigate("/welcome");
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className={styles.textInput}
        ></input>

        <button type="submit" className={styles.button}>
          Los geht&apos;s!
        </button>
      </form>
    </>
  );
}
