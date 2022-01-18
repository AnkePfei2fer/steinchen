import { FormEvent } from "react";

export type SetProps = {
  numberSet: string | undefined;
  nameSet: string | undefined;
  year: number | undefined;
  numberPartsSet: number | undefined;
  imageUrlSet?: string;
  nameTheme: string | undefined;
  partsInventory: [] | undefined;
  mocInformation: [] | undefined;
};

export type Set = {
  numberSet: string;
  nameSet: string;
  year: number;
  numberPartsSet: number;
  imageUrlSet: string;
  nameTheme: string;
  partsInventory: [];
  mocInformation: [];
};

export type SvgProps = {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: (event: FormEvent) => void;
};

export type RefreshPageProps = { onLoadSet: () => void };

export type CollectionProps = { collection: Set[] };
