import { useEffect, useState } from "react";

type SearchResultProps = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  theme_id: number;
  detail: string | undefined;
};

export default function useSet(query: string) {
  const [searchResult, setSearchResult] = useState<SearchResultProps | null>(
    null
  );
  const [themeQuery, setThemeQuery] = useState<number | null>(null);
  const [searchResultDetail, setSearchResultDetail] = useState<
    string | undefined
  >(undefined);
  const [themeSearchResult, setThemeSearchResult] =
    useState<SearchResultProps | null>(null);

  // fetch set from API
  const fetchSet = async function () {
    const response = await fetch(`/api/sets/search_by_set_number/${query}`);
    const result = await response.json();
    setSearchResult(result);
    setThemeQuery(result.theme_id);
    setSearchResultDetail(result.detail);
  };

  // fetch theme from API
  const fetchTheme = async function () {
    const themeResponse = await fetch(
      `/api/theme/search_by_theme_id/${themeQuery}`
    );
    const themeResult = await themeResponse.json();
    setThemeSearchResult(themeResult);
  };

  useEffect(() => {
    if (query) {
      localStorage.setItem("Search Query", query);
      fetchSet();
      fetchTheme();
    }
  }, [query, themeQuery]);

  console.log({ query });
  console.log({ searchResult });
  console.log({ themeQuery });
  console.log({ themeSearchResult });
  console.log({ searchResultDetail });

  return { query, searchResult, themeSearchResult, searchResultDetail };
}
