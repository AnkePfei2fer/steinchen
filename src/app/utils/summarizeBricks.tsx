import { useEffect, useState } from "react";
import useCollection from "./useCollection";
import { Parts } from "../types";

export default function summarizeBricks() {
  const { collection } = useCollection();
  const [bricksList, setBricksList] = useState<Parts[]>([]);

  const summarize = function () {
    // Extract parts information of all sets from user collection
    console.log({ collection });
    const partsInventory = collection?.map((parts) => {
      return [...parts.partsInventory];
    });

    // Combine all arrays with parts information
    const arrays = partsInventory?.flat();
    console.log({ arrays });

    // Summarize identical bricks
    const obj: Parts[] = [];

    arrays?.forEach((part) => {
      if (obj[part.partID]) {
        obj[part.partID].quantity = obj[part.partID].quantity + part.quantity;
      } else {
        obj[part.partID] = part;
      }
    });
    setBricksList(Object.values(obj));
  };

  bricksList.sort(function (a, b) {
    return a.colorID - b.colorID;
  });

  useEffect(() => {
    summarize();
  }, [collection]);

  return { bricksList, summarize };
}
