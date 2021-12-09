import { useEffect, useState } from "react";

export type SetProps = {
  numberSet: string | undefined;
  nameSet: string | undefined;
  year: number | undefined;
  numberParts: number | undefined;
  imageUrl?: string;
  nameTheme: string | undefined;
};

export default function useSet(query: string | null) {
  const [searchResult, setSearchResult] = useState<SetProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetch set from API
  const fetchSet = async function () {
    const response = await fetch(`/api/sets/${query}`);
    setIsLoading(false);
    if (!response.ok) {
      return;
    }
    const result = await response.json();
    setSearchResult(result);
  };

  useEffect(() => {
    if (query) {
      localStorage.setItem("Search Query", query);
      fetchSet();
    }
  }, [query]);

  return { query, searchResult, isLoading };
}
