import { SvgProps } from "../../../types";

export default function LogoutIcon(props: SvgProps): JSX.Element {
  return (
    <svg viewBox="0 0 36 29" {...props}>
      <path d="M25.5 16.25C26.4665 16.25 27.25 15.4665 27.25 14.5C27.25 13.5335 26.4665 12.75 25.5 12.75V16.25ZM0.762563 13.2626C0.0791456 13.946 0.0791456 15.054 0.762563 15.7374L11.8995 26.8744C12.5829 27.5578 13.691 27.5578 14.3744 26.8744C15.0578 26.191 15.0578 25.0829 14.3744 24.3995L4.47487 14.5L14.3744 4.60051C15.0578 3.91709 15.0578 2.80905 14.3744 2.12563C13.691 1.44221 12.5829 1.44221 11.8995 2.12563L0.762563 13.2626ZM19 0.25C18.0335 0.25 17.25 1.0335 17.25 2C17.25 2.9665 18.0335 3.75 19 3.75V0.25ZM33.8636 2H35.6136C35.6136 1.0335 34.8301 0.25 33.8636 0.25V2ZM33.8636 26.5V28.25C34.8301 28.25 35.6136 27.4665 35.6136 26.5H33.8636ZM19 24.75C18.0335 24.75 17.25 25.5335 17.25 26.5C17.25 27.4665 18.0335 28.25 19 28.25V24.75ZM25.5 12.75H2V16.25H25.5V12.75ZM19 3.75H33.8636V0.25H19V3.75ZM32.1136 2V26.5H35.6136V2H32.1136ZM19 28.25H33.8636V24.75H19V28.25Z" />
    </svg>
  );
}
