import { useEffect, useState } from "react";
import { CarouselImage } from "../interfaces/carousel.ts";
import sanityClient from "../client.ts";

const useCarousel = () => {
  const [carousels, setCarousels] = useState<CarouselImage[]>([]);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const query = `*[_type == "carousel"]{ id, image { asset->{ ref, url } }, alt }`;
        const data = await sanityClient.fetch(query);
        setCarousels(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCarousels();
  }, []); // Remove setIsLoading completely

  return { carousels };
};
export default useCarousel;
