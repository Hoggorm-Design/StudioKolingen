import React from "react";
import { useParams } from "react-router-dom";
import useArtDisplay from "../hooks/useArtDisplay.ts";
import { useLoading } from "../context/LoadingContext.tsx";
import Footer from "../components/shared/Footer.tsx";

const ApartmentPage: React.FC = () => {
  const { header } = useParams<{ header: string }>();
  const { artDisplay } = useArtDisplay();
  const { isLoading } = useLoading();

  // Finn apartment som samsvarer med header
  const apartment = artDisplay?.find((item) => item.header === header);

  return (
    <>
      {!isLoading && apartment && (
        <>
          <section className="flex justify-center items-center bg-[#1D192C] pt-[138px] pb-[64px] lg:py-16 px-5 md:px-36 xl:px-64">
            <div className="max-h-[50vh] w-auto aspect-square md:aspect-video overflow-hidden">
              <img
                src={apartment.image.asset.url}
                alt={apartment.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </section>
          <section className="flex flex-col md:flex-row w-full gap-16 lg:gap-44 px-5 sm:px-10 pt-14">
            <section className="flex flex-col md:w-1/2 space-y-4">
              <h2>{apartment.header}</h2>
              <p>{apartment.text}</p>
            </section>
            <section className="md:w-1/2">
              {apartment.image2 && (
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={apartment.image2.asset.url}
                    alt={apartment.alt2 || "Additional image"}
                    className="w-full h-full object-cover object-center"
                  />
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
