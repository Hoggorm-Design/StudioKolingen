import React from "react";
import { useParams } from "react-router-dom";
import MyCarousel from "../components/blog/BlogCarousel.tsx";
import Footer from "../components/shared/Footer.tsx";
import { useLoading } from "../context/LoadingContext.tsx";
import useFacilities from "../hooks/useFacilities.ts";

const ApartmentPage: React.FC = () => {
  const { header } = useParams<{ header: string }>();
  const { facilities } = useFacilities();
  const { isLoading } = useLoading();

  // Find facility that corresponds to header
  const facility = facilities?.find(
    (item) => item.header.toLowerCase().trim().replace(/ /g, "-") === header
  );

  return (
    <>
      {!isLoading && facility && (
        <>
          <section className="flex justify-center items-center bg-[#1D192C] pt-[138px] pb-[64px] lg:py-16 px-5 md:px-36 xl:px-64">
            <div className="max-h-[50vh] w-auto aspect-square md:aspect-video overflow-hidden">
              <img
                src={facility.carouselImages[0].asset.url}
                alt={facility.carouselImages[0].altText}
                className="w-full h-full object-cover"
              />
            </div>
          </section>
          <section className="flex flex-col md:flex-row w-full gap-16 lg:gap-44 px-5 sm:px-10 pt-14">
            <section className="flex flex-col md:w-1/2 space-y-4">
              <h2>{facility.header}</h2>
              {facility.textBlocks.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </section>
            <section className="md:w-1/2">
              {facility.carouselImages.length > 3 ? (
                <MyCarousel images={facility.carouselImages} />
              ) : (
                <div className="w-1/2 aspect-square overflow-hidden">
                  {facility.carouselImages.map((image) => (
                    <>
                      <img
                        src={image.asset.url}
                        alt={image.altText || "Additional image"}
                        className="w-full h-full object-cover object-center"
                      />
                      <p>{image.imageText} || Lorem</p>
                    </>
                  ))}
                </div>
              )}
            </section>
          </section>
        </>
      )}
      <Footer />
    </>
  );
};

export default ApartmentPage;
