import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { MakersSpaceContent } from "../interfaces/makersSpaceContent.ts";
import { useLoading } from "../context/LoadingContext";

const useMakersSpaceContent = () => {
  const [makersSpaceContent, setMakersSpaceContent] = useState<
    MakersSpaceContent[]
  >([]);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchMakersSpaceContent = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "makersSpaceContent"]{
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
          }
        }`;
        const data: MakersSpaceContent[] = await sanityClient.fetch(query);
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
