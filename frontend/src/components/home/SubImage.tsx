import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext.tsx";
import useSubImages from "../../hooks/useSubImages.ts";
import MyCarousel from "./Carousel.tsx";

const SubImage = () => {
  const { isLoading } = useLoading();
  const { subImages } = useSubImages();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string, postTitle?: string) => {
    navigate(path, {
      state: postTitle ? { selectedPost: postTitle } : undefined,
    });
  };

  const headerToLink = (header: string) => {
    const mapping: Record<string, string> = {
      "Emergency residence": "/blog",
    };
    return mapping[header] || "/blog";
  };

  const headerToLink2 = (header: string) => {
    const mapping: Record<string, string> = {
      "Makers space": "/makersspace",
    };
    return mapping[header] || "/makersspace";
  }

  const mappedSubImages = subImages
    .map((item: any) => {
      if (item._type === 'blogPost') {
        const image = item.mainImage;
        return {
          image: image?.asset?.url ?? '',
          alt: image?.altText ?? '',
          header: item.header,
          link: headerToLink(item.header),
          selectedPost: item.header,
        };
      }

      if (item._type === 'makersSpaceYears') {
        const image = item.mainImage?.asset ? item.mainImage : item.images?.[0]; 
        return {
          image: image?.asset?.url ?? '',
          alt: image?.altText ?? '',
          header: item.header,
          link: headerToLink2(item.header),
          selectedPost: item.header,
        };
      }
      return null; 
    })
    .filter(Boolean); 
  
  return (
    <>
      {!isLoading && subImages.length == 3 && (
        <section className="bg-[#1a1a2e] py-10 w-screen mx:overflow-x-hidden">
          <MyCarousel />

          <section className="w-screen">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 xl:gap-14 px-5 py-10 sm:p-10">
              {mappedSubImages.map((item, index) =>
                item ? (
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
                ) : null
              )}
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default SubImage;