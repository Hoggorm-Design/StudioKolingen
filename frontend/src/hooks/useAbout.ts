import { useEffect, useState } from "react";
import { About } from "../interfaces/about.ts";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";

const useAbout = () => {
  const [about, setAbout] = useState<About | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchAbout = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "about"][0]{
                   header,
                   text1,
                   text2, 
                   text3,
                   image{
                       asset->{
                           _ref,
                           url
                       }
                   },
                   alt
               }`;
        const data: About = await sanityClient.fetch(query);
        setAbout(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAbout();
  }, [setIsLoading]);

  return { about };
};

export default useAbout;
