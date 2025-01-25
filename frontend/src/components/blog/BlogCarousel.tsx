import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel: React.FC<{ images: any[] }> = ({ images }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    medium: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full flex flex-col items-center px-6 sm:px-14 py-12">
      <div className="relative w-[90%] max-w-screen-xl pb-16">
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 0.5s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="px-4"
          showDots={true}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[300px] flex-shrink-0 overflow-hidden"
            >
              <img
                src={image.asset.url}
                alt={image.alt || "Image"}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MyCarousel;
