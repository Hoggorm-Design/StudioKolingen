import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext.tsx";
import { FeaturedPosts } from "../interfaces/frontPageImages.ts"

const useSubImages = () => {
  const [subImages, setSubImages] = useState<FeaturedPosts[]>([]);
  const { setIsLoading } = useLoading();


  useEffect(() => {
    const fetchSubImages = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "frontPageImages"] {
        "featuredPosts": featuredPosts[]->{
          _id,
          header,
          images[] { 
            asset-> {
              _ref,
              url
            },
            altText
            },
          mainImage {
            asset -> {
            _ref,
            url
            },
            altText
          },
          publishedAt,
          _type,
        }
      }`;
        const data = await sanityClient.fetch(query);
        setSubImages(data[0]?.featuredPosts ?? []);
        } catch (error) {
          console.error("Error fetching sub image:", error);
        } finally {
          setIsLoading(false);
        }
      };

      /*
      try {
        const query = `*[_type == "imagePageLink"] | order(header asc){
         header,
         image { asset->{ ref, url }, alt },
       }`;
        const data = await sanityClient.fetch(query);
        setSubImages(data);
      } catch (error) {
        console.error("Error fetching sub image:", error);
      } finally {
        setIsLoading(false);
      }
    };*/

    fetchSubImages();
  }, [setIsLoading]);

  return { subImages };
};

export default useSubImages;
