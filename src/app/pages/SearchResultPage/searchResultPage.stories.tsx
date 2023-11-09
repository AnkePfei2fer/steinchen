import SearchResultPage from "./searchResultPage";
import { RefreshPageProps } from "../../../../types";

export default { component: SearchResultPage, title: "Pages/Search Result" };
export const Default = ({ onLoadSet }: RefreshPageProps) => (
  <SearchResultPage onLoadSet={onLoadSet} />
);
