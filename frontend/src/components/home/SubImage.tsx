import React from "react";
import useSubImage from "../../hooks/useSubImage.ts";
import MyCarousel from "./Carousel.tsx";
import { useLoading } from "../../context/LoadingContext.tsx";

const SubImage: React.FC = () => {
  const { subImage } = useSubImage();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && subImage && (
        <section className="bg-[#1a1a2e] py-20 w-screen overflow-x-hidden">
          <MyCarousel />

          <section className="w-screen py-24">
            {/* Container to display images in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-28 sm:gap-8 xl:gap-14 p-10">
              {/* Image 1 */}
              <div>
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={subImage.image.asset.url}
                    alt={subImage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-white mt-4 font-semibold">
                  {subImage.header}
                </h4>
                <p className="text-white mt-4">Her skal det komme en link</p>
              </div>
              {/* Image 2 */}
              <div>
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={subImage.image2.asset.url}
                    alt={subImage.alt2}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-white mt-4 font-semibold">
                  {subImage.header2}
                </h4>
                <p className="text-white mt-4">Her skal det komme en link</p>
              </div>
              {/* Image 3 */}
              <div>
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={subImage.image3.asset.url}
                    alt={subImage.alt3}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-white mt-4 font-semibold">
                  {subImage.header3}
                </h4>
                <p className="text-white mt-4">Her skal det komme en link</p>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default SubImage;
