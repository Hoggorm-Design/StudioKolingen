import {useEffect, useState} from "react";
import {SubImage} from "../interfaces/subImage.ts";
import sanityClient from "../client.ts";

const useSubImage = () => {
    const [subImage, setSubImage] = useState<SubImage | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSubImage = async () => {
            const query = `*[_type == "subImage"][0]{
        image {
          asset->{
            _ref,
            url
          }
        },
        alt
      }`;

            const data = await sanityClient.fetch(query);
            setSubImage(data);
            setLoading(false);
        };

        fetchSubImage();
    }, []);

    return { subImage, loading };
};

export default useSubImage;