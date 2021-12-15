import SearchResultPage from "./searchResultPage";

type SearchResultPageProps = { onAddSet: () => void };

export default { component: SearchResultPage, title: "Pages/Search Result" };
export const Default = ({ onAddSet }: SearchResultPageProps) => (
  <SearchResultPage onAddSet={onAddSet} />
);
