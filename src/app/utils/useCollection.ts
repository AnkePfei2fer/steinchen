import { useEffect, useState } from "react";
import { Set } from "../../../types";

export default function useCollection() {
  const [collection, setCollection] = useState<Set[]>([]);

  // fetch set collection from MongoDB
  const refresh = async function () {
    const username = localStorage.getItem("Current User");
    const response = await fetch(`/api/users/${username}`);
    if (!response.ok) {
      return;
    }
    const result = await response.json();
    setCollection(result.sets);
  };

  useEffect(() => {
    refresh();
  }, []);

  return { collection, refresh };
}
