import DetailsPage from "./detailsPage";
import { Set } from "../../types";

type CollectionProps = { collection: Set[]; onAddSet: () => void };

export default { component: DetailsPage, title: "Pages/Details" };
export const Default = ({ collection, onAddSet }: CollectionProps) => (
  <DetailsPage collection={collection} onAddSet={onAddSet} />
);
