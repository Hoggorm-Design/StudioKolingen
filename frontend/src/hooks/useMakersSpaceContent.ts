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
        const query = `*[_type == "makersSpaceContent"] | order(publishedAt desc){
        _id,
        header,
          text1,
          text2,
          text3,
          image1{
            asset->{
              _ref,
              url
            },
            altText
          },
          image2{
            asset->{
              _ref,
              url
            },
            altText
          },
          image3{
            asset->{
              _ref,
              url
            },
            altText
          },
          image4{
            asset->{
              _ref,
              url
            },
            altText
          },
          image5{
            asset->{
              _ref,
              url
            },
            altText
          },
          image6{
            asset->{
              _ref,
              url
            },
            altText
          },
          image7{
            asset->{
              _ref,
              url
            },
            altText
          },
          image8{
            asset->{
              _ref,
              url
            },
            altText
          },
          image9{
            asset->{
              _ref,
              url
            },
            altText
          },
          image10{
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
  }, [setIsLoading]); // Add setIsLoading to dependencies

  return { makersSpaceContent };
};

export default useMakersSpaceContent;
