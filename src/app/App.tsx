import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function doFetch() {
      const response = await fetch("/api/hello");
      const result = await response.json();
      setMessage(result.message);
    }
    doFetch();
  }, []);

  return (
    <div className={styles.app}>
      Hello Gesellenstück
      <p>{message}</p>
    </div>
  );
}

export default App;
