import React from "react";
import { useParams } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import useFacilities from "../../hooks/useFacilities";
import MyCarousel from "../blog/BlogCarousel";

const ApartmentInfo: React.FC = () => {
  const { header } = useParams<{ header: string }>();
  const { facilities } = useFacilities();
  const { isLoading } = useLoading();

  // Find facility that corresponds to header
  const facility = facilities?.find(
    (item) =>
      header && item.header.toLowerCase().trim().replace(/ /g, "-") === header
  );

  const additionalImages = facility?.carouselImages.slice(1);

  return (
    !isLoading &&
    facility &&
    additionalImages && (
      <div className="pt-[64px] lg:p-0">
        <section className="flex flex-col">
          <section className="flex flex-col md:flex-row w-full gap-12 px-5 sm:px-10 md:gap-44 py-14 items-start">
            <div className="flex flex-col md:w-1/2 space-y-8">
              <h2 className="text-nowrap">{facility.header}</h2>
              {facility.textBlocks.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="flex flex-col md:w-1/2">
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={facility.carouselImages[0]?.asset?.url || ""}
                  alt={
                    facility.carouselImages[0]?.altText || "Additional image"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-left pt-2">
                {facility.carouselImages[0]?.altText || ""}
              </p>
            </div>
          </section>

          {additionalImages.length < 4 ? (
            <>
              {/* Mobile Layout */}
              <section className=" bg-[#1D192C] block sm:hidden px-5 sm:px-10 py-16">
                {additionalImages[0] && (
                  <div className="mb-6 space-y-2">
                    <div className="w-full aspect-square overflow-hidden">
                      <img
                        src={additionalImages[0]?.asset?.url || ""}
                        alt={additionalImages[0]?.altText || "Additional image"}
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-left text-white">
                      {additionalImages[0]?.altText || ""}
                    </p>
                  </div>
                )}

                {additionalImages.length > 1 && (
                  <div className="flex flex-row justify-center gap-6">
                    {additionalImages.slice(1).map((image, index) => (
                      <div key={index} className="flex flex-col gap-y-2 w-1/2">
                        <div className="relative w-full aspect-square overflow-hidden">
                          <img
                            src={image?.asset?.url || ""}
                            alt={image?.altText || "Additional image"}
                            className="sw-full h-full object-cover"
                          />
                        </div>
                        <p className="text-left text-white">
                          {image?.altText || ""}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Larger Screens Layout */}
              <section className="w-screen bg-[#1D192C] hidden sm:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 sm:px-10 py-16">
                  {additionalImages.map((image, index) => (
                    <div key={index} className="flex flex-col gap-y-2">
                      <div className="w-full aspect-square overflow-hidden">
                        <img
                          src={image?.asset?.url || ""}
                          alt={image?.altText || "Additional image"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-left text-white">
                        {image?.altText || ""}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section className="w-screen relative left-1/2 -translate-x-1/2 bg-[#1D192C] py-10">
              <MyCarousel images={additionalImages} />
            </section>
          )}
        </section>
      </div>
    )
  );
};

export default ApartmentInfo;
