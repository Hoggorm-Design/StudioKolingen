import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { AboutMakersSpace } from "../interfaces/aboutMakersSpace.ts";
import { useLoading } from "../context/LoadingContext";

const useAboutMakersSpace = () => {
  const [aboutMakersSpace, setAboutMakersSpace] =
    useState<AboutMakersSpace | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch both queries in parallel
        const [aboutData] = await Promise.all([
          sanityClient.fetch(`*[_type == "aboutMakersSpace"][0]{
            aboutHeader,
            aboutText,
          }`),
        ]);

        setAboutMakersSpace(aboutData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  return { aboutMakersSpace };
};

export default useAboutMakersSpace;
