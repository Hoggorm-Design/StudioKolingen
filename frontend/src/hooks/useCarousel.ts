import {useEffect, useState} from "react";
import {CarouselImage} from "../interfaces/carousel.ts";
import sanityClient from "../client.ts";

const useCarousel = () => {
    const [carousels, setCarousels] = useState<CarouselImage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCarousels = async () => {
            const query = `*[_type == "carousel"]{  
                _id,
                image {
                    asset->{
                        _ref,
                        url
                    }
                },
                alt
            }`;

            const data = await sanityClient.fetch(query);

            const mappedCarousels = data.map((item: any) => ({
                image: item.image,
                alt: item.alt
            }));

            setCarousels(mappedCarousels);
            setLoading(false);
        };

        fetchCarousels();
    }, []);

    return { carousels, loading };
};

export default useCarousel;