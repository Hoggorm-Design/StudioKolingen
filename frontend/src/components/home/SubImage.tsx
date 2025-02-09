import React from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import useSubImage from "../../hooks/useSubImage.ts";
import MyCarousel from "./Carousel.tsx";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
              {[
                {
                  image: subImage.image,
                  alt: subImage.alt,
                  header: subImage.header,
                  link: "/blog",
                },
                {
                  image: subImage.image2,
                  alt: subImage.alt2,
                  header: subImage.header2,
                  link: "/makersspace",
                },
                {
                  image: subImage.image3,
                  alt: subImage.alt3,
                  header: subImage.header3,
                  link: "/blog",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={item.image.asset.url}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="text-white py-2">{item.header}</h4>

                  {/* Read More Link with Animation */}
                  <Link
                    to={item.link}
                    className="text-white font-light text-md inline-block"
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover="hover"
                      initial="initial"
                    >
                      <motion.span
                        variants={{
                          initial: { opacity: 1 },
                          hover: { opacity: 0.75 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        Read more
                      </motion.span>

                      <motion.span
                        variants={{
                          initial: { opacity: 1, x: 0 },
                          hover: { opacity: 0.75, x: 5 }, // Moves right & fades
                        }}
                        transition={{ type: "tween", duration: 0.3 }}
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
                      </motion.span>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default SubImage;
