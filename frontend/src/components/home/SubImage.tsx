import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import useSubImage from "../../hooks/useSubImage.ts";
import MyCarousel from "./Carousel.tsx";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const SubImage: React.FC = () => {
  const { subImage } = useSubImage();
  const { isLoading } = useLoading();
  const navigate = useNavigate();

  const handleNavigation = (path: string, postTitle?: string) => {
    navigate(path, {
      state: postTitle ? { selectedPost: postTitle } : undefined,
    });
  };

  return (
    <>
      {!isLoading && subImage && (
        <section className="bg-[#1a1a2e] py-10 w-screen mx:overflow-x-hidden">
          <MyCarousel />

          <section className="w-screen">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 xl:gap-14 px-5 py-10 sm:p-10">
              {[
                {
                  image: subImage.image,
                  alt: subImage.alt,
                  header: subImage.header,
                  link: "/blog",
                  selectedPost: "Emergency residence",
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
                <div className="sm:hover:scale-105 " key={index}>
                  <div
                    className="w-full aspect-square overflow-hidden cursor-pointer"
                    onClick={() =>
                      handleNavigation(item.link, item.selectedPost)
                    }
                  >
                    <img
                      src={item.image.asset.url}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="text-white py-2">{item.header}</h4>
                  <Link
                    to={item.link}
                    state={
                      item.selectedPost
                        ? { selectedPost: item.selectedPost }
                        : undefined
                    }
                    className="text-white font-light text-md inline-block"
                  >
                    <motion.div
                      className="flex items-center gap-2 sm:hidden"
                      whileHover="hover"
                    >
                      <motion.span>Read more</motion.span>
                      <motion.span>
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
