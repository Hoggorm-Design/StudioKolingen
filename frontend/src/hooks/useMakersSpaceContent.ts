import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { MakersSpaceContent } from "../interfaces/makersSpaceContent.ts";

const useMakersSpaceContent = () => {
  const [makersSpaceContent, setMakersSpaceContent] =
    useState<MakersSpaceContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMakersSpaceContent = async () => {
      const query = `*[_type == "makersSpaceContent"][0]{
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
      const data: MakersSpaceContent = await sanityClient.fetch(query);
      setMakersSpaceContent(data);
      setLoading(false);
    };

    fetchMakersSpaceContent();
  }, []);

  return { makersSpaceContent, loading };
};

export default useMakersSpaceContent;
