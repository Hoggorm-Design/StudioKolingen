import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";
import { SubImage } from "../interfaces/subImage.ts";

const useSubImage = () => {
  const [subImage, setSubImage] = useState<SubImage | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchSubImage = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "frontPageTop3Images"][0]{
         header,
         image { asset->{ ref, url } },
         alt,
         header2,
         image2 { asset->{ ref, url } },
         alt2,
         header3,
         image3 { asset->{ _ref, url } },
         alt3
       }`;
        const data = await sanityClient.fetch(query);
        setSubImage(data);
      } catch (error) {
        console.error("Error fetching sub image:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubImage();
  }, [setIsLoading]);

  return { subImage };
};

export default useSubImage;
