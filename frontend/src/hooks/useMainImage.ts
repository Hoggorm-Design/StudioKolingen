import { useEffect, useState } from "react";
import { MainImage } from "../interfaces/mainImage.ts";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext.tsx";

const useMainImage = () => {
  const [mainImage, setMainImage] = useState<MainImage | null>(null);
  const { setIsLoading } = useLoading();
  useEffect(() => {
    const fetchMainImage = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "mainImage"][0]{
        image {
          asset->{
            _ref,
            url
          }
        },
        alt,
        header,
        text
      }`;

        const data = await sanityClient.fetch(query);
        setMainImage(data);
      } catch (error) {
        console.error("Error fetching main image", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMainImage();
  }, []);

  return { mainImage };
};

export default useMainImage;
