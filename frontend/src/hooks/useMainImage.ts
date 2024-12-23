import {useEffect, useState} from "react";
import {MainImage} from "../interfaces/mainImage.ts";
import sanityClient from "../client.ts";

const useMainImage = () => {
    const [mainImage, setMainImage] = useState<MainImage | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMainImage = async () => {
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
            setLoading(false);
        };

        fetchMainImage();
    }, []);

    return { mainImage, loading };
};

export default useMainImage;