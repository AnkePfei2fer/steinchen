import { FormEvent } from "react";

export type Parts = {
  quantity: number;
  sparePart: boolean;
  partID: number;
  numberPart: string;
  imageUrlPart: string;
};

export type Mocs = {
  numberMoc: string;
  nameMoc: string;
  numberPartsMoc: number;
  imageUrlMoc: string;
  urlMoc: string;
};

export type SetProps = {
  numberSet: string | undefined;
  nameSet: string | undefined;
  year: number | undefined;
  numberPartsSet: number | undefined;
  imageUrlSet?: string;
  nameTheme: string | undefined;
  partsInventory: Parts[] | undefined;
  mocInformation: Mocs[] | undefined;
};

export type Set = {
  numberSet: string;
  nameSet: string;
  year: number;
  numberPartsSet: number;
  imageUrlSet: string;
  nameTheme: string;
  partsInventory: Parts[];
  mocInformation: Mocs[];
};

export type SvgProps = {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: (event: FormEvent) => void;
};

export type RefreshPageProps = {
  onLoadSet: () => void;
};

export type RefresBricksProps = {
  onLoadBricks: () => void;
  onLoadSet: () => void;
};

export type CollectionProps = { collection: Set[] };
