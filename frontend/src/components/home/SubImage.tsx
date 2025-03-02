import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import useSubImages from "../../hooks/useSubImages.ts";
import MyCarousel from "./Carousel.tsx";

const SubImage = () => {
  const { subImages } = useSubImages();
  const { isLoading } = useLoading();
  const navigate = useNavigate();

  const handleNavigation = (path: string, postTitle?: string) => {
    navigate(path, {
      state: postTitle ? { selectedPost: postTitle } : undefined,
    });
  };

  const headerToLink = (header: string) => {
    const mapping: Record<string, string> = {
      "Emergency residence": "/blog",
      "Makers Space": "/makersspace",
    };
    return mapping[header] || "/blog";
  };

  const mappedSubImages = subImages
    .map((item) => [
      {
        image: item.image.asset.url,
        alt: item.image.alt,
        header: item.header,
        link: headerToLink(item.header),
        selectedPost: item.header,
      },
    ])
    .flat();
  return (
    <>
      {!isLoading && subImages && (
        <section className="bg-[#1a1a2e] py-10 w-screen mx:overflow-x-hidden">
          <MyCarousel />

          <section className="w-screen">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 xl:gap-14 px-5 py-10 sm:p-10">
              {mappedSubImages.map((item, index) => (
                <div
                  className="sm:transform sm:transition-transform sm:duration-300 sm:hover:scale-105 sm:cursor-pointer"
                  key={index}
                >
                  <div
                    className="w-full aspect-square overflow-hidden cursor-pointer"
                    onClick={() =>
                      handleNavigation(item.link, item.selectedPost)
                    }
                  >
                    <img
                      src={item.image}
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
