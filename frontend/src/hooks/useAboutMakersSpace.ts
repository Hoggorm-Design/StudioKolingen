import { useEffect, useState } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";
import { AboutMakersSpace } from "../interfaces/aboutMakersSpace";

const useAboutMakersSpace = () => {
  const [aboutMakersSpace, setAboutMakersSpace] =
    useState<AboutMakersSpace | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const aboutData = await sanityClient.fetch(`
          *[_type == "makersSpacePageInfo"][0]{
            aboutHeader,
            aboutText,
            subHeader,
            subTitleText,
            subTitleText2,
            image{
              asset->{
                url
              },
              altText
            }
          }
        `);

        setAboutMakersSpace(aboutData);
      } catch (error) {
        console.error("Error fetching Makers Space data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setIsLoading]);

  return { aboutMakersSpace };
};

export default useAboutMakersSpace;
