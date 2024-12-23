import {useEffect, useState} from "react";
import {Carousel} from "../interfaces/carousel.ts";
import sanityClient from "../client.ts";

const useCarousel = () => {
    const [carousel, setCarousel] = useState<Carousel | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCarousel = async () => {
            const query = `*[_type == "carousel"][0]{
        image1{
          asset->{
            _ref,
            url
          }
        },
        alt1,
        image2{
          asset->{
            _ref,
            url
          }
        },
        alt2,
        image3{
          asset->{
            _ref,
            url
          }
        },
        alt3,
        image4{
          asset->{
            _ref,
            url
          }
        },
        alt4,
        image5{
          asset->{
            _ref,
            url
          }
        },
        alt5
      }`;

            const data = await sanityClient.fetch(query);

            // Mapping the data into an array of images
            const images = [
                { image: data.image1, alt: data.alt1 },
                { image: data.image2, alt: data.alt2 },
                { image: data.image3, alt: data.alt3 },
                { image: data.image4, alt: data.alt4 },
                { image: data.image5, alt: data.alt5 },
            ];

            setCarousel({ images });
            setLoading(false);
        };

        fetchCarousel();
    }, []);

    return { carousel, loading };
};

export default useCarousel;