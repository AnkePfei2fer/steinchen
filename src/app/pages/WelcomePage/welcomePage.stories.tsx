import WelcomePage from "./welcomePage";
import { RefresBricksProps } from "../../types";

export default { component: WelcomePage, title: "Pages/Welcome" };
export const Default = ({ onLoadSet, onLoadBricks }: RefresBricksProps) => (
  <WelcomePage onLoadSet={onLoadSet} onLoadBricks={onLoadBricks} />
);
