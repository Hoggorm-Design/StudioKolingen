import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useCarousel from "../../hooks/useCarousel.ts";
import { Image } from "../blog/BlogCarousel.tsx";
import ImageModal from "../shared/ImageModal.tsx";

const ButtonGroup: React.FC<{
  next: () => void;
  previous: () => void;
}> = ({ next, previous }) => {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center"
      role="group"
      aria-label="Carousel Navigation"
    >
      {/* Left Arrow */}
      <button
        onClick={previous}
        className="hidden sm:block focus:outline-none absolute -left-16"
        aria-label="Previous slide"
        type="button"
      >
        <div className="bg-white text-[#1D192C] w-10 h-10 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </div>
        <span className="sr-only">Previous</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="hidden sm:block focus:outline-none absolute -right-16"
        aria-label="Next slide"
        type="button"
      >
        <div className="bg-white text-[#1D192C] w-10 h-10 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

const isMobile = typeof window !== "undefined" && window.innerWidth < 640; // Const checks if window is mobile screen size

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
  ></button>
);

const MyCarousel: React.FC = () => {
  const { carousels } = useCarousel();

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

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
      items: 1.4,
    },
  };
  if (!carousels?.length) return null;

  return (
    <>
      <section
        className="w-full flex flex-col items-center px-5 py-10 sm:p-10"
        aria-label="Image Carousel"
      >
        <div className="relative w-full sm:w-[85%] xl:w-[90%]">
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={!isMobile}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="px-2 sm:px-4 flex"
            renderButtonGroupOutside={true}
            customButtonGroup={
              <ButtonGroup next={() => {}} previous={() => {}} />
            }
            arrows={false}
            showDots={false}
            renderDotsOutside={true}
            customDot={
              <CustomDot
                onClick={() => {}}
                active={false}
                index={0}
                totalSlides={carousels.length}
              />
            }
          >
            {carousels.map((image, index) => (
              <div
                key={index}
                className="w-full h-[300px] flex-shrink-0 overflow-hidden"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${carousels.length}`}
              >
                <img
                  src={image?.image?.asset?.url}
                  alt={image?.alt || `Carousel image ${index + 1}`}
                  className="w-[90%] mx-auto h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  onClick={() => handleImageClick(image?.image)}
                />
                <ImageModal
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default MyCarousel;
