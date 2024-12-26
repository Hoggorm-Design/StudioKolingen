import { Prices } from "../interfaces/prices.ts";
import { useEffect, useState } from "react";
import sanityClient from "../client.ts";

const usePrices = () => {
  const [prices, setPrices] = useState<Prices | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const query = `*[_type == "prices"][0]{
        header,
        text,
        onenight,
        oneweek,
        twoweeks,
        fourweeks,
        extraPerson,
        text2
      }`;

      const data = await sanityClient.fetch(query);
      setPrices(data);
      setLoading(false);
    };

    fetchPrices();
  }, []);

  return { prices, loading };
};

export default usePrices;
