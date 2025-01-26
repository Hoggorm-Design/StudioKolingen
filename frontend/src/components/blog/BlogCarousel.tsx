import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ButtonGroup: React.FC<{
  next: () => void;
  previous: () => void;
}> = ({ next, previous }) => {
  return (
    <div className="absolute top-[40%] w-full flex justify-between items-center">
      {/* Left Arrow */}
      <button
        onClick={previous}
        className="hidden sm:block text-white focus:outline-none -left-16 absolute"
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="hidden sm:block text-white focus:outline-none -right-16 absolute"
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
      </button>
    </div>
  );
};

const CustomDot: React.FC<{
  onClick: () => void;
  active: boolean;
}> = ({ onClick, active }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full mx-1 border-2 transition-all focus:outline-none ${
      active ? "bg-white border-white" : "border-white bg-transparent"
    }`}
  ></button>
);

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
    <section className="w-full flex flex-col items-center sm:px-14 py-12">
      <div className="relative w-full max-w-screen-xl pb-16">
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
          itemClass="sm:px-4"
          renderButtonGroupOutside={true}
          customButtonGroup={
            <ButtonGroup next={() => {}} previous={() => {}} />
          }
          arrows={false} // Hide default arrows
          showDots={true}
          renderDotsOutside={true} // Dots will appear outside the carousel
          customDot={<CustomDot onClick={() => {}} active={false} />} // Custom dots
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
