import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Chevron_left from "../assets/Chevron_left.svg";
import Chevron_right from "../assets/Chevron_right.svg";
import { LinkData } from "../interfaces/linkData";

const ButtonGroup: React.FC<{
  next: () => void;
  previous: () => void;
}> = ({ next, previous }) => {
  return (
    <div
      className="absolute inset-0 flex top-1/3 w-full h-full z-10 pointer-events-none"
      role="group"
      aria-label="Carousel Navigation"
    >
      {/* Left Arrow */}
      <button
        onClick={previous}
        className="hidden sm:block focus:outline-none absolute left-14 sm:-left-0 pointer-events-auto"
        aria-label="Previous slide"
        type="button"
      >
        <div className="bg-[#1D192C] text-white w-13 h-10 rounded-full flex items-center justify-center ">
          <img src={Chevron_left} alt="Previous" />
        </div>
        <span className="sr-only">Previous</span>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="hidden sm:block focus:outline-none absolute right-14 sm:-right-0 pointer-events-auto"
        aria-label="Next slide"
        type="button"
      >
        <div className="bg-[#1D192C] text-white w-13 h-10 rounded-full flex items-center justify-center">
          <img src={Chevron_right} alt="Next" />
        </div>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

// Custom dot for carousel navigation
const CustomDot: React.FC<{
  onClick: () => void;
  active: boolean;
  index: number;
  totalSlides: number;
}> = ({ onClick, active, index, totalSlides }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full mx-1 border-2 transition-all focus:outline-none ${
      active ? "bg-[#1D192C] border-[#1D192C]" : "border-white bg-transparent"
    }`}
    aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
    aria-current={active ? "true" : "false"}
    type="button"
  ></button>
);

const LocationCarousel: React.FC<{ links: LinkData[] }> = ({ links }) => {
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
      items: 1.5,
    },
  };

  return (
    <section
      className="w-full flex flex-col items-center px-0 py-8 "
      aria-label="Blog Image Carousel"
    >
      <div className="relative w-full sm:w-full xl:w-full">
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
          itemClass="px-4 sm:px-2 flex"
          renderButtonGroupOutside={true}
          customButtonGroup={
            <ButtonGroup next={() => {}} previous={() => {}} />
          }
          arrows={false}
          showDots={false}
          customDot={
            <CustomDot
              onClick={() => {}}
              active={false}
              index={0}
              totalSlides={links.length}
            />
          }
        >
          {links.map((link, index) => (
            <div
              key={index}
              className="max-h-[125%] w-full shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-200 mx-auto"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${links.length}`}
            >
              <Link to={link.url} className="w-full h-full block">
                <img
                  src={link.image?.asset?.url}
                  alt={link.imageAlt}
                  className="h-[80%] w-full object-cover"
                />
                <p className="text-black h-[20%] mt-2">{link.imageAlt}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default LocationCarousel;
