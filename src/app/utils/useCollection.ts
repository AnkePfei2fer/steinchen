import { useEffect, useState } from "react";

export default function useCollection() {
  const [usersets, setUsersets] = useState([]);

  const username = localStorage.getItem("Current User");

  // fetch set collection from MongoDB
  const fetchCollection = async function () {
    const response = await fetch(`/api/users/${username}`);
    if (!response.ok) {
      return;
    }
    const result = await response.json();
    setUsersets(result.sets);
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  return { usersets };
}
