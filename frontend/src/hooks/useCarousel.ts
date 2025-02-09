import { useEffect, useState } from "react";
import sanityClient from "../client.ts";
import { CarouselImage } from "../interfaces/carousel.ts";

const useCarousel = () => {
  const [carousels, setCarousels] = useState<CarouselImage[]>([]);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const query = `*[_type == "frontPageImageCarousel"]{ id, image { asset->{ ref, url } }, alt }`;
        const data = await sanityClient.fetch(query);
        setCarousels(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCarousels();
  }, []);

  return { carousels };
};
export default useCarousel;
