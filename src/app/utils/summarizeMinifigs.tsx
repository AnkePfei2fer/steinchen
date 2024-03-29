import { useEffect, useState } from "react";
import useCollection from "./useCollection";
import { Minifigs } from "../../../types";

export default function summarizeMinifigs() {
  const { collection } = useCollection();
  const [minifigsList, setMinifigsList] = useState<Minifigs[]>([]);

  const sumMinifigs = function () {
    // Extract minifig information of all sets from user collection
    const minifigInformation = collection?.map((minifigs) => {
      if (minifigs.minifigInformation) {
        return [...minifigs.minifigInformation];
      }
    });

    // Combine all arrays with minifigs information
    const arrays = minifigInformation?.flat();

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

  minifigsList.sort((a, b) => a.nameMinifig.localeCompare(b.nameMinifig));

  useEffect(() => {
    sumMinifigs();
  }, [collection]);

  return { minifigsList, sumMinifigs };
}
