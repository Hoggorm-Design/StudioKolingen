import { LinkData } from "../interfaces/linkData.ts";
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
        const query = `*[_type == "link"]{
                   url,
                   alt
               }`;
        const linksData = await sanityClient.fetch(query);
        setLinks(linksData);
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
