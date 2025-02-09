import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext.tsx";
import { ArtDisplay } from "../interfaces/artDisplay.ts";

const useFacilities = () => {
  const [artDisplay, setArtDisplay] = useState<ArtDisplay[] | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchArtDisplay = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "facilities"]{
         header,
         text,
         image{
           asset->{
             ref,
             url
           }
         },
         alt,
         image2{
           asset->{
             ref,
             url
           }
         },
         alt2
       }`;
        const data: ArtDisplay[] = await sanityClient.fetch(query);
        setArtDisplay(data);
      } catch (error) {
        console.error("Error fetching art display:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtDisplay();
  }, [setIsLoading]);

  return { artDisplay };
};

export default useFacilities;
