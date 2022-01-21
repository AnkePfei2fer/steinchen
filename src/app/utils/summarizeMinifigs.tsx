import { useEffect, useState } from "react";
import useCollection from "./useCollection";
import { Minifigs } from "../types";

export default function summarizeMinifigs() {
  const { collection } = useCollection();
  const [minifigsList, setMinifigsList] = useState<Minifigs[]>([]);

  const summarizeMinifig = function () {
    // Extract minifig information of all sets from user collection
    console.log({ collection });
    const minifigInformation = collection?.map((minifigs) => {
      if (minifigs.minifigInformation) {
        return [...minifigs.minifigInformation];
      }
    });

    // Combine all arrays with minifigs information
    const arrays = minifigInformation?.flat();
    console.log({ arrays });

    // Summarize identical minifigs
    const obj: Minifigs[] = [];

    arrays?.forEach((minifig) => {
      if (minifig) {
        if (obj[minifig.minifigID]) {
          obj[minifig.minifigID].quantity =
            obj[minifig.minifigID].quantity + minifig.quantity;
        } else {
          obj[minifig.minifigID] = minifig;
        }
      }
    });
    setMinifigsList(Object.values(obj));
  };

  minifigsList.sort(function (a, b) {
    return a.minifigID - b.minifigID;
  });

  useEffect(() => {
    summarizeMinifig();
  }, [collection]);

  return { minifigsList, summarizeMinifig };
}
