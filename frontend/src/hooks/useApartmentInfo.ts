import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";
import { ApartmentInfo } from "../interfaces/apartmentInfo.ts";

const useApartmentInfo = () => {
  const [apartmentInfo, setApartmentInfo] = useState<ApartmentInfo | null>(
    null
  );
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchApartmentInfo = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "facilitiesPageInfo"][0]{header, text}`;
        const data: ApartmentInfo = await sanityClient.fetch(query);
        setApartmentInfo(data);
      } catch (error) {
        console.error("Error fetching apartment info:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApartmentInfo();
  }, [setIsLoading]);

  return { apartmentInfo };
};

export default useApartmentInfo;
