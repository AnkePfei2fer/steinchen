import DetailsPage from "./detailsPage";
import { Set } from "../../types";

type CollectionProps = { collection: Set[] };

export default { component: DetailsPage, title: "Pages/Details" };
export const Default = ({ collection }: CollectionProps) => (
  <DetailsPage collection={collection} />
);
