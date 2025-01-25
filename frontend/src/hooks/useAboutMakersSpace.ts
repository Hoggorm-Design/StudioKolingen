import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { AboutMakersSpace } from "../interfaces/aboutMakersSpace.ts";

const useAboutMakersSpace = () => {
  const [aboutMakersSpace, setAboutMakersSpace] =
    useState<AboutMakersSpace | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAboutMakersSpace = async () => {
      const query = `*[_type == "aboutMakersSpace"][0]{
        aboutHeader,
        aboutText,
        subHeader,
        subTitleText,
        subTitleText2,
        image{
          asset->{
            _ref,
            url
          },
          alt
        }
      }`;
      const data: AboutMakersSpace = await sanityClient.fetch(query);
      setAboutMakersSpace(data);
      setLoading(false);
    };

    fetchAboutMakersSpace();
  }, []);

  return { aboutMakersSpace, loading };
};

export default useAboutMakersSpace;
