import WelcomePage from "./welcomePage";
import { RefresPartsProps } from "../../../../types";

export default { component: WelcomePage, title: "Pages/Welcome" };
export const Default = ({
  onLoadSet,
  onLoadBricks,
  onLoadMinifigs,
}: RefresPartsProps) => (
  <WelcomePage
    onLoadSet={onLoadSet}
    onLoadBricks={onLoadBricks}
    onLoadMinifigs={onLoadMinifigs}
  />
);
