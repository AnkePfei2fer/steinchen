import WelcomePage from "./welcomePage";
import { RefreshPageProps } from "../../types";

export default { component: WelcomePage, title: "Pages/Welcome" };
export const Default = ({ onLoadSet }: RefreshPageProps) => (
  <WelcomePage onLoadSet={onLoadSet} />
);
