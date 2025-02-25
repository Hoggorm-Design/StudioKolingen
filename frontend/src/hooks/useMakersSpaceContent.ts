import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { useLoading } from "../context/LoadingContext";
import { MakersSpaceContentProps } from "../interfaces/makersSpaceContent.ts";

const useMakersSpaceContent = () => {
  const [makersSpaceContent, setMakersSpaceContent] = useState<
    MakersSpaceContentProps[]
  >([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchMakersSpaceContent = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "makersSpaceYears"] | order(publishedAt desc){
          _id,
          header,
          firstTextfield[],  
          textBlocks[],  
          links[] {  
            name,  
            url    
          },
          mainImage {
            asset->{
              _ref,
              url
            },
          },
          images[] {
            asset->{
              _ref,
              url
            },
            altText
          },
          publishedAt
        }`;

        const data: MakersSpaceContentProps[] = await sanityClient.fetch(query);
        setMakersSpaceContent(data);
      } catch (error) {
        console.error("Error fetching makers space content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMakersSpaceContent();
  }, [setIsLoading]);

  return { makersSpaceContent };
};

export default useMakersSpaceContent;
