import BricksPage from "./bricksPage";
import { CollectionProps } from "../../types";

export default { component: BricksPage, title: "Pages/Bricks" };
export const Default = ({ collection }: CollectionProps) => (
  <BricksPage collection={collection} />
);
