import React from "react";
import { useParams } from "react-router-dom";
import useArtDisplay from "../hooks/useArtDisplay.ts";

const ApartmentPage: React.FC = () => {
  const { header } = useParams<{ header: string }>();
  const { artDisplay, loading } = useArtDisplay();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!artDisplay) {
    return <div>No apartment data available.</div>;
  }

  // Finn apartment som samsvarer med header
  const apartment = artDisplay.find((item) => item.header === header);

  if (!apartment) {
    return <div>Apartment not found.</div>;
  }

  return (
    <>
      <section className="flex justify-center items-center h-[75vh] bg-[#1D192C] pt-[168px] pb-[88px] lg:py-20 px-8 md:px-36 xl:px-64">
        <div className="h-full w-auto aspect-video overflow-hidden">
          <img
            src={apartment.image.asset.url}
            alt={apartment.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col xl:flex-row w-full min-h-screen gap-20 p-10 pt-16 justify-center">
        <section className="flex flex-col xl:w-1/2 space-y-4">
          <h2>{apartment.header}</h2>
          <p>{apartment.text}</p>
        </section>
        <section className="xl:w-1/2">
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
  );
};

export default ApartmentPage;
