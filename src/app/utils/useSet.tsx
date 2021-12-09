import { useEffect, useState } from "react";

type SearchResultProps = {
  numberSet: string | null;
  nameSet: string | null;
  year: number | null;
  numberParts: number | null;
  imageUrl?: string;
  nameTheme: string | null;
};

export default function useSet(query: string | null) {
  const [searchResult, setSearchResult] = useState<SearchResultProps | null>(
    null
  );
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
