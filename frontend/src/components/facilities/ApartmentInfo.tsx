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
      <div className="pt-[88px] lg:p-0">
        <section className="flex flex-col gap-16 px-5 sm:px-10 lg:pt-14">
          <section className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col space-y-4 md:w-1/2">
              <h2 className="text-3xl font-bold">{facility.header}</h2>
              {facility.textBlocks.map((text, index) => (
                <p key={index} className="text-lg">
                  {text}
                </p>
              ))}
            </div>

            <div className="flex flex-col md:w-1/2">
              <img
                src={facility.carouselImages[0]?.asset?.url || ""}
                alt={facility.carouselImages[0]?.altText || "Additional image"}
                className="w-full h-full object-cover"
              />
              <p className="text-center">
                {facility.carouselImages[0]?.altText || ""}
              </p>
            </div>
          </section>

          {additionalImages.length < 4 ? (
            <>
              {/* Mobile Layout */}
              <section className="w-screen relative left-1/2 -translate-x-1/2 bg-[#1D192C] block sm:hidden">
                <div className="pt-[138px] pb-[64px] px-5">
                  {additionalImages.length === 1 && (
                    <div className="flex flex-col gap-y-2">
                      <div className="relative w-full aspect-square overflow-hidden">
                        <img
                          src={additionalImages[0]?.asset?.url || ""}
                          alt={
                            additionalImages[0]?.altText || "Additional image"
                          }
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-white">
                        {additionalImages[0]?.altText ||
                          "No description available"}
                      </p>
                    </div>
                  )}

                  {additionalImages.length === 2 && (
                    <div className="flex flex-row justify-center gap-4">
                      {additionalImages.map((image, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-y-2 w-1/2"
                        >
                          <div className="relative w-full aspect-square overflow-hidden">
                            <img
                              src={image?.asset?.url || ""}
                              alt={image?.altText || "Additional image"}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-center text-white">
                            {image?.altText || "No description available"}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {additionalImages.length === 3 && (
                    <div className="flex flex-col gap-6">
                      {/* First image: larger */}
                      <div className="flex flex-col gap-y-2">
                        <div className="relative w-full aspect-square overflow-hidden">
                          <img
                            src={additionalImages[0]?.asset?.url || ""}
                            alt={
                              additionalImages[0]?.altText || "Additional image"
                            }
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-white">
                          {additionalImages[0]?.altText ||
                            "No description available"}
                        </p>
                      </div>
                      {/* Next two images in a row */}
                      <div className="flex flex-row justify-center gap-4">
                        {additionalImages.slice(1).map((image, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-y-2 w-1/2"
                          >
                            <div className="relative w-full aspect-square overflow-hidden">
                              <img
                                src={image?.asset?.url || ""}
                                alt={image?.altText || "Additional image"}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-center text-white">
                              {image?.altText || "No description available"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section className="w-screen relative left-1/2 -translate-x-1/2 bg-[#1D192C] hidden sm:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-[138px] pb-[64px] lg:py-16 px-5 md:px-36 xl:px-64">
                  {additionalImages.map((image, index) => (
                    <div key={index} className="flex flex-col gap-y-2">
                      <div className="relative w-full aspect-square overflow-hidden">
                        <img
                          src={image?.asset?.url || ""}
                          alt={image?.altText || "Additional image"}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-center text-white">
                        {image?.altText || "No description available"}
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
