import { LinkData } from "../interfaces/location.ts";
import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext.tsx";

const useLinks = () => {
  const [links, setLinks] = useState<LinkData[]>([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchLinksData = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "ourLocation"][0].locations[] -> {
                   url,
                   image{
                     asset->{
                       _ref,
                       url
                     }
                   },
                   imageAlt
               }`;
        const data: LinkData[] = await sanityClient.fetch(query);
        setLinks(data);
      } catch (error) {
        console.error("Error fetching links data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLinksData();
  }, [setIsLoading]);

  return { links };
};

export default useLinks;
