import React from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import useSubImage from "../../hooks/useSubImage.ts";
import MyCarousel from "./Carousel.tsx";

const SubImage: React.FC = () => {
  const { subImage } = useSubImage();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && subImage && (
        <section className="bg-[#1a1a2e] py-10 w-screen mx:overflow-x-hidden">
          <MyCarousel />

          <section className="w-screen">
            {/* Container to display images in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 xl:gap-14 px-5 py-10 sm:p-10">
              {/* Image 1 */}

              <div>
                <div className="w-full aspect-square overflow-hidden">
                  <Link to="/blog">
                    <img
                      src={subImage.image.asset.url}
                      alt={subImage.alt}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>

                <h4 className="text-white mt-4 font-semibold">
                  {subImage.header}
                </h4>
              </div>
              {/* Image 2 */}
              <div>
                <div className="w-full aspect-square overflow-hidden">
                  <Link to="/makersspace">
                    <img
                      src={subImage.image2.asset.url}
                      alt={subImage.alt2}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <h4 className="text-white mt-4 font-semibold">
                  {subImage.header2}
                </h4>
              </div>
              {/* Image 3 */}
              <div>
                <div className="w-full aspect-square overflow-hidden">
                  <Link to="/blog">
                    <img
                      src={subImage.image3.asset.url}
                      alt={subImage.alt3}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <h4 className="text-white mt-4 font-semibold">
                  {subImage.header3}
                </h4>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default SubImage;
