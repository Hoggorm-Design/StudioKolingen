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
        {/* Container to display images in a row */}
        <div className="flex justify-center space-x-20">
          {/* Image 1 */}
          <div className="flex flex-col items-start">
            <img
              className="w-[425px] h-[425px] object-cover object-center min-h-[150px]"
              src={subImage.image.asset.url}
              alt={subImage.alt}
            />
            <h3 className="text-white mt-4">{subImage.header}</h3>
            <p className="text-white mt-4">Her skal det komme en link</p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-start">
            <img
              className="w-[425px] h-[425px] object-cover object-center min-h-[150px]"
              src={subImage.image2.asset.url}
              alt={subImage.alt2}
            />
            <h3 className="text-white mt-4">{subImage.header2}</h3>
            <p className="text-white mt-4">Her skal det komme en link</p>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-start">
            <img
              className="w-[425px] h-[425px] object-cover object-center min-h-[150px]"
              src={subImage.image3.asset.url}
              alt={subImage.alt3}
            />
            <h3 className="text-white mt-4">{subImage.header3}</h3>
            <p className="text-white mt-4">Her skal det komme en link</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SubImage;
