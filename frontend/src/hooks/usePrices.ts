import { Prices } from "../interfaces/prices.ts";
import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";

const usePrices = () => {
  const [prices, setPrices] = useState<Prices | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchPrices = async () => {
      setIsLoading(true);
      try {
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
      } catch (error) {
        console.error("Error fetching prices:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, [setIsLoading]);

  return { prices };
};

export default usePrices;
