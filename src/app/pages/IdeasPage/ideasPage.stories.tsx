import IdeasPage from "./ideasPage";
import { CollectionProps } from "../../types";

export default { component: IdeasPage, title: "Pages/Ideas" };
export const Default = ({ collection }: CollectionProps) => (
  <IdeasPage collection={collection} />
);
