import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext.tsx";
import { Facilities } from "../interfaces/artDisplay";

const useFacilities = () => {
  const [facilities, setFacilities] = useState<Facilities[] | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchFacilities = async () => {
      setIsLoading(true);
      try {
        const query = `
          *[_type == "facilities"]{
            header,
            textBlocks,
            mainImage{
              asset->{
                _ref,
                url
              }
            },
            images[]{
              asset->{
                _ref,
                url
              },
              imageText,
              altText
            }
          }
        `;

        const data: Facilities[] = await sanityClient.fetch(query);
        setFacilities(data);
      } catch (error) {
        console.error("Error fetching facilities:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFacilities();
  }, [setIsLoading]);

  return { facilities };
};

export default useFacilities;
