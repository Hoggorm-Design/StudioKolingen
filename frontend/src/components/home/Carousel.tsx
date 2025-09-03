import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useCarousel from "../../hooks/useCarousel.ts";
import { Image } from "../blog/BlogCarousel.tsx";
import ImageModal from "../shared/ImageModal.tsx";
import Chevron_left from "../../assets/Chevron_left.svg";
import Chevron_right from "../../assets/Chevron_right.svg";


const ButtonGroup: React.FC<{
  next: () => void;
  previous: () => void;
  }> = ({ next, previous }) => {
    return (
      <div
    className="absolute inset-0 flex items-center justify-between w-full h-full z-10 pointer-events-none"
    aria-label="Carousel Navigation"
    >
      {/* Left Arrow */}
      <button
        onClick={previous}
        className="hidden sm:block focus:outline-none absolute left-14 sm:-left-4 pointer-events-auto"
        aria-label="Previous slide"
        type="button"
      >
        <div className="bg-white text-[#1D192C] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={Chevron_left} alt="Previous"/>
        </div>
        <span className="sr-only">Previous</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="hidden sm:block focus:outline-none absolute right-14 sm:-right-4 pointer-events-auto"
        aria-label="Next slide"
        type="button"
      >
        <div className="bg-white text-[#1D192C] w-10 h-10 rounded-full flex items-center justify-center">
          <img src={Chevron_right} alt="Next"/>
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
  const carouselImages = carousels?.[0]?.carouselImages || [];
  
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4.5,
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
  if (!carouselImages?.length) return null;


  return (
    <>
      <section
        className="w-full flex flex-col items-center px-0 py-3 sm:p-2"
        aria-label="Image Carousel"
      >
        <div className="relative w-full sm:w-[95%] xl:w-[97%]">
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
            itemClass="px-4 sm:px-2 flex"
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
                totalSlides={carouselImages.length}
              />
            }
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square w-full max-w-[350px] shrink-0 overflow-hidden mx-auto z-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${carouselImages.length}`}
              >
                <img
                  src={image?.asset?.url}
                  alt={image?.alt || `Carousel image ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  onClick={() => handleImageClick(image)}
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
