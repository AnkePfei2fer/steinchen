import SetsPage from "./setsPage";
import { Set } from "../../../../types";

type CollectionProps = { collection: Set[] };

export default { component: SetsPage, title: "Pages/Sets" };
export const Default = ({ collection }: CollectionProps) => (
  <SetsPage collection={collection} />
);
