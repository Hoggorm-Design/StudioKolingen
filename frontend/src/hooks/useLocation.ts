import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { Localy } from "../interfaces/location.ts";
import { useLoading } from "../context/LoadingContext";

const useLocation = () => {
  const [location, setLocation] = useState<Localy | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchLocation = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "location"][0]{
                   header,
                   text
               }`;
        const data = await sanityClient.fetch(query);
        setLocation(data);
      } catch (error) {
        console.error("Error fetching location:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, [setIsLoading]);

  return { location };
};

export default useLocation;
