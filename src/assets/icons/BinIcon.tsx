import { SvgProps } from "../../../types";

export default function ArrowIcon(props: SvgProps): JSX.Element {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" {...props}>
      <path
        stroke="var(--color-brick-red-dark)"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.79999 8.59998H28.2L25.988 28.508C25.9122 29.1931 25.5863 29.8262 25.0727 30.286C24.5592 30.7458 23.8941 31 23.2048 31H10.7952C10.1059 31 9.44077 30.7458 8.92723 30.286C8.4137 29.8262 8.08781 29.1931 8.01199 28.508L5.79999 8.59998Z"
      />
      <path
        stroke="var(--color-brick-red-dark)"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.483 4.6058C10.7094 4.12556 11.0678 3.7196 11.5162 3.43528C11.9646 3.15095 12.4846 2.99999 13.0156 3H20.9844C21.5156 2.99973 22.0359 3.15056 22.4846 3.4349C22.9333 3.71924 23.2918 4.12534 23.5184 4.6058L25.4 8.6H8.59998L10.483 4.6058Z"
      />
      <path
        stroke="var(--color-brick-red-dark)"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.59998H31"
      />
      <path
        stroke="var(--color-brick-red-dark)"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.2 15.6V22.6"
      />
      <path
        stroke="var(--color-brick-red-dark)"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.8 15.6V22.6"
      />
    </svg>
  );
}
