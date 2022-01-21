import { FormEvent } from "react";

// RAW DATA
export type Part = {
  quantity: number;
  is_spare: boolean;
  element_id: number;
  part: object;
  part_num: number;
  part_img_url: string;
  color: object;
  id: number;
};

export type Minifig = {
  id: number;
  set_name: string;
  quantity: number;
  set_img_url: string;
};

export type Moc = {
  set_num: string;
  name: string;
  num_parts: number;
  moc_img_url: string;
  moc_url: string;
};

// ENTITIES:
export type Parts = {
  quantity: number;
  sparePart: boolean;
  partID: number;
  numberPart: string;
  imageUrlPart: string;
  colorID: number;
};

export type Minifigs = {
  minifigID: number;
  nameMinifig: string;
  quantity: number;
  imageUrlMinifig: string;
};

export type Mocs = {
  numberMoc: string;
  nameMoc: string;
  numberPartsMoc: number;
  imageUrlMoc: string;
  urlMoc: string;
};

// SET AND COLLECTION
export type Set = {
  numberSet: string;
  nameSet: string;
  year: number;
  numberPartsSet: number;
  imageUrlSet: string;
  nameTheme: string;
  partsInventory: Parts[];
  minifigInformation: Minifigs[];
  mocInformation: Mocs[];
};

export type CollectionProps = { collection: Set[] };

// FUNCTION PROPS
export type SetProps = {
  numberSet: string | undefined;
  nameSet: string | undefined;
  year: number | undefined;
  numberPartsSet: number | undefined;
  imageUrlSet?: string;
  nameTheme: string | undefined;
  partsInventory: Parts[] | undefined;
  minifigInformation: Minifigs[] | undefined;
  mocInformation: Mocs[] | undefined;
};

export type SvgProps = {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: (event: FormEvent) => void;
};

// PROPS FOR LOADING AND REFRESHING
export type RefreshPageProps = {
  onLoadSet: () => void;
};

export type RefresPartsProps = {
  onLoadBricks: () => void;
  onLoadMinifigs: () => void;
  onLoadSet: () => void;
};
