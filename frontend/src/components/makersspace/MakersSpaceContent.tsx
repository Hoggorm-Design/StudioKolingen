import useMakersSpaceContent from "../../hooks/useMakersSpaceContent.ts";
import { useEffect, useState } from "react";
import MyCarousel from "../blog/BlogCarousel.tsx";
import { useLoading } from "../../context/LoadingContext.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MakersSpaceCard from "./CompressedMakersSpaceCard.tsx";

const MakersSpaceContent = () => {
  const { makersSpaceContent } = useMakersSpaceContent();
  const { isLoading } = useLoading();
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const handleSeeMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, makersSpaceContent.length));
  };

  useEffect(() => {
    if (makersSpaceContent) {
      if (makersSpaceContent.length > 0) {
        setSelectedPost(makersSpaceContent[0]);
      }
    }
  }, [makersSpaceContent]);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const handleCardClick = (post: any) => {
    if (selectedPost !== post) {
      setSelectedPost(post); // Oppdater det valgte innlegget

      setTimeout(() => {
        const element = document.getElementById("makerSpaceContent");
        if (element) {
          const yOffset = -50; // Juster offset etter behov
          const yPosition =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: yPosition, behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <>
      {!isLoading && makersSpaceContent && (
        <section id="makerSpaceContent">
          {/* Selected Post Section */}
          {selectedPost && (
            <section>
              <article className="bg-[#1a1a2e] sm:px-10 py-14">
                {/* Carousel Section */}
                <article className="grid grid-cols-1 sm:grid-cols-3 gap-16 px-5 sm:px-0">
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={selectedPost.image1?.asset?.url}
                      alt={selectedPost.image1?.asset?.altText || "Image 1"}
                    />
                  </div>
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={selectedPost.image2?.asset?.url}
                      alt={selectedPost.image2?.asset?.altText || "Image 2"}
                    />
                  </div>
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={selectedPost.image3?.asset?.url}
                      alt={selectedPost.image3?.asset?.altText || "Image 3"}
                    />
                  </div>
                </article>
                <MyCarousel
                  images={[
                    selectedPost.image1,
                    selectedPost.image2,
                    selectedPost.image3,
                    selectedPost.image4,
                    selectedPost.image5,
                    selectedPost.image6,
                    selectedPost.image7,
                    selectedPost.image8,
                    selectedPost.image9,
                    selectedPost.image10,
                  ].filter((image) => image && image.asset)}
                />
              </article>
              <article className="flex justify-center items-center px-5 py-12 xs:px-8 md:px-36 xl:px-64">
                <div className="bg-white flex flex-col gap-10">
                  <p>{selectedPost.text1}</p>
                  <p>{selectedPost.text2}</p>
                  <p>{selectedPost.text3}</p>
                </div>
              </article>
            </section>
          )}

          {/* Makers Space Cards Section */}
          {selectedPost && (
            <article className="bg-[#1a1a2e] px-5 sm:px-10 py-16">
              <article className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 xl:gap-14">
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedPost.image4?.asset?.url}
                    alt={selectedPost.image4?.asset?.altText || "Image 4"}
                  />
                </div>
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedPost.image5?.asset?.url}
                    alt={selectedPost.image5?.asset?.altText || "Image 5"}
                  />
                </div>
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedPost.image6?.asset?.url}
                    alt={selectedPost.image6?.asset?.altText || "Image 6"}
                  />
                </div>
              </article>

              <section className="bg-[#1D192C] pt-14 space-y-4">
                <h3 className="text-[#fffdf8]">More Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:sm:grid-cols-3 gap-16 md:gap-12 xl:gap-14">
                  {makersSpaceContent
                    .filter((post) => post !== selectedPost)
                    .slice(0, visiblePosts)
                    .map((post, index) => (
                      <MakersSpaceCard
                        key={post._id || index}
                        post={post}
                        onClick={() => handleCardClick(post)}
                        isMobile={isMobile}
                      />
                    ))}
                </div>
                {visiblePosts < makersSpaceContent.length && ( // Kun vis knappen hvis det er flere innlegg å laste
                  <div className="flex mt-10">
                    <button
                      onClick={handleSeeMore}
                      className="flex items-center text-[#fffdf8] text-lg font-light gap-6 "
                    >
                      See more posts
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                )}
              </section>
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default MakersSpaceContent;
