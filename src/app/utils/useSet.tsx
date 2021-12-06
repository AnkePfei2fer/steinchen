import { useEffect, useState } from "react";

export type SearchResultProps = {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  theme_id: number;
  detail: string;
  // searchResult: object | null;
};

export default function useSet(search: string): SearchResultProps | null {
  const [searchResult, setSearchResult] = useState<null | SearchResultProps>(
    null
  );
  // const [searchResultDetails, setSearchResultDetails] = useState<
  //   string | undefined
  // >(undefined);
  // const [themeSearchResult, setThemeSearchResult] =
  //   useState<SearchResultProps | null>(null);

  // fetch set from API
  useEffect(() => {
    fetch(`/api/sets/search_by_set_number/${search}`)
      .then((response) => response.json())
      .then(setSearchResult);

    // setSearchResultDetails(searchResult?.detail);

    // fetch theme from API
    // fetch(`/api/theme/search_by_theme_id/${searchResult?.theme_id}`)
    //   .then((themeResponse) => themeResponse.json())
    //   .then(setThemeSearchResult);
  }, [search]);

  return searchResult;
}
