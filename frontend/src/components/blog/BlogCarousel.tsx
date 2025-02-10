import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ButtonGroup: React.FC<{
  next: () => void;
  previous: () => void;
}> = ({ next, previous }) => {
  return (
    <div
      className="absolute top-[40%] w-full flex justify-between items-center"
      role="group"
      aria-label="Carousel Navigation"
    >
      {/* Left Arrow */}
      <button
        onClick={previous}
        className="hidden sm:block text-white focus:outline-none -left-16 absolute"
        aria-label="Previous slide"
        type="button"
      >
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          size="2x"
          aria-hidden="true"
        />
        <span className="sr-only">Previous</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="hidden sm:block text-white focus:outline-none -right-16 absolute"
        aria-label="Next slide"
        type="button"
      >
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          size="2x"
          aria-hidden="true"
        />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

const CustomDot: React.FC<{
  onClick: () => void;
  active: boolean;
  index: number;
  totalSlides: number;
}> = ({ onClick, active, index, totalSlides }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full mx-1 border-2 transition-all focus:outline-none ${
      active ? "bg-white border-white" : "border-white bg-transparent"
    }`}
    aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
    aria-current={active ? "true" : "false"}
    type="button"
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
    <section
      className="w-full flex flex-col items-center px-5 sm:p-10"
      aria-label="Blog Image Carousel"
    >
      <div className="relative pb-14 w-full sm:w-[85%] xl:w-[90%]">
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
          arrows={false}
          showDots={true}
          renderDotsOutside={true}
          customDot={
            <CustomDot
              onClick={() => {}}
              active={false}
              index={0}
              totalSlides={images?.length || 0}
            />
          }
        >
          {images.map((image, index) => (
            <React.Fragment key={index}>
              <div
                className="w-full h-[300px] flex-shrink-0 overflow-hidden"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${images.length}`}
              >
                <img
                  src={image?.asset.url}
                  alt={image?.alt || `Blog image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-white">
                {image?.imageText ? image?.imageText : ""}
              </p>
            </React.Fragment>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MyCarousel;
