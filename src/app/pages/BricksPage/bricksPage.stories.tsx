import BricksPage from "./bricksPage";
import { Set } from "../../types";

type CollectionProps = { collection: Set[] };

export default { component: BricksPage, title: "Pages/Bricks" };
export const Default = ({ collection }: CollectionProps) => (
  <BricksPage collection={collection} />
);
