import DetailsPage from "./detailsPage";
import { Set } from "../../../../types";

type CollectionProps = { collection: Set[]; onLoadSet: () => void };

export default { component: DetailsPage, title: "Pages/Details" };
export const Default = ({ collection, onLoadSet }: CollectionProps) => (
  <DetailsPage collection={collection} onLoadSet={onLoadSet} />
);
