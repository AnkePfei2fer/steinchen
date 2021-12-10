export type SetProps = {
  numberSet: string | undefined;
  nameSet: string | undefined;
  year: number | undefined;
  numberParts: number | undefined;
  imageUrl?: string;
  nameTheme: string | undefined;
};

export type Set = {
  numberSet: string;
  nameSet: string;
  year: number;
  numberParts: number;
  imageUrl: string;
  nameTheme: string;
};

// export type CollectionProps = {
//   username: string;
//   sets: [];
//   numberSet: string | undefined;
//   nameSet: string | undefined;
//   year: number | undefined;
//   numberParts: number | undefined;
//   imageUrl?: string;
//   nameTheme: string | undefined;
// };