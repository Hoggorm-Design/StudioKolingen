import React from "react";
import useSubImage from "../../hooks/useSubImage.ts";
import MyCarousel from "./Carousel.tsx";

const SubImage: React.FC = () => {
  const { subImage, loading } = useSubImage();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!subImage) {
    return <div>No sub image available.</div>;
  }

  return (
    <section className="bg-[#1a1a2e] py-20 w-screen overflow-x-hidden">
      <MyCarousel />
      <section className="w-screen py-24">
        <img
          className="w-full h-full object-cover object-center min-h-[250px] "
          src={subImage.image.asset.url}
          alt={subImage.alt}
        />
      </section>
    </section>
  );
};

export default SubImage;
