import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLoading } from "../../context/LoadingContext.tsx";
import useMakersSpaceContent from "../../hooks/useMakersSpaceContent.ts";
import { MakersSpaceContentProps } from "../../interfaces/makersSpaceContent.ts";
import MyCarousel from "../blog/BlogCarousel.tsx";
import MakersSpaceCard from "./CompressedMakersSpaceCard.tsx";

const MakersSpaceContent = () => {
  const { makersSpaceContent } = useMakersSpaceContent();
  const { isLoading } = useLoading();
  const [selectedPost, setSelectedPost] =
    useState<MakersSpaceContentProps | null>(null);
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

  const handleCardClick = (post: MakersSpaceContentProps) => {
    if (selectedPost !== post) {
      setSelectedPost(post);

      setTimeout(() => {
        const element = document.getElementById("makerSpaceContent");
        if (element) {
          const yOffset = -50;
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
              <article className="bg-[#1a1a2e] py-14 w-full">
                {/* Artists info */}
                <div className="bg-white flex flex-col gap-10 w-screen px-5 sm:px-10">
                  <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-44 py-14 items-start">
                    <div className="flex flex-col lg:w-1/2 space-y-8">
                      <h2 className="text-black">{selectedPost.header}</h2>
                      <div className="bg-white flex flex-col gap-10 w-full">
                        {/* Displaying Only the First Text Block */}
                        {selectedPost.firstTextfield
                          ?.slice(0, 2)
                          .map((block, index) => <p key={index}>{block}</p>)}
                      </div>
                      {/* Displaying Text Blocks with Links */}
                      <div>
                        {selectedPost.links?.map((block, index) => (
                          <p key={index}>
                            <a
                              href={block.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#B22C2B] transition-300 transition-all cursor-pointer"
                            >
                              {block.name}
                            </a>
                          </p>
                        ))}
                      </div>
                      <div className="">
                        {/* Displaying All Text Blocks Except the First One */}
                        {selectedPost.firstTextfield
                          ?.slice(2)
                          .map((block, index) => <p key={index}>{block}</p>)}
                      </div>
                    </div>
                    {selectedPost.regularImages
                      ?.slice(0, 1)
                      .map((image, index) => (
                        <div
                          key={index}
                          className="lg:w-1/2 w-full aspect-square overflow-hidden order-1 lg:order-2 "
                        >
                          <img
                            className="w-full h-full object-cover"
                            src={image?.asset?.url}
                            alt={image?.altText || `Image ${index + 1}`}
                          />
                        </div>
                      ))}
                  </div>
                </div>

                {selectedPost &&
                  (() => {
                    const filteredImages = selectedPost.regularImages
                      ?.slice(1, 4)
                      .filter((image) => image?.asset); // Fjern tomme bilder

                    const imageCount = filteredImages.length; // Tell antall bilder

                    return (
                      <article
                        className={`grid gap-16 px-5 sm:px-10 pt-16
          ${imageCount === 1 ? "grid-cols-1 place-items-center md:px-[20vw] lg:px-[30vw]" : ""}
          ${imageCount === 2 ? "grid-cols-2 place-content-center gap-8 lg:px-[10vw]" : ""}
          ${imageCount >= 3 ? "grid-cols-1 md:grid-cols-3" : ""}`}
                      >
                        {filteredImages.map((image, index) => (
                          <div
                            key={index}
                            className="w-full aspect-square overflow-hidden"
                          >
                            <img
                              className="w-full h-full object-cover"
                              src={image?.asset?.url}
                              alt={image?.altText || `Image ${index + 1}`}
                            />
                          </div>
                        ))}
                      </article>
                    );
                  })()}
              </article>

              {/* Text Blocks Section */}
              <article className="flex justify-center items-center px-5 py-12 xs:px-8 md:px-36 xl:px-64">
                <div className="bg-white flex flex-col gap-10">
                  {/* Displaying Plain Text Blocks */}
                  {selectedPost.textBlocks?.map((block, index) => (
                    <p key={index}>{block}</p>
                  ))}
                </div>
              </article>
            </section>
          )}

          {/* Makers Space Cards Section */}
          {selectedPost && (
            <article className="bg-[#1a1a2e] px-5 sm:px-10 pb-14 pt-12 lg:pt-8">
              {/* Carousel Component */}
              <MyCarousel
                images={selectedPost.carouselImages?.filter(
                  (image) => image?.asset,
                )}
              />

              {/* More Posts Section */}
              <section className="bg-[#1D192C] pt-14 space-y-4">
                <h3 className="pb-4 text-[#fffdf8]">More Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 xl:gap-14">
                  {makersSpaceContent
                    .filter((post) => post._id !== selectedPost._id)
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
                {visiblePosts < makersSpaceContent.length && (
                  <div className="flex mt-10">
                    <button
                      onClick={handleSeeMore}
                      className="flex items-center text-[#fffdf8] text-lg font-light gap-6"
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
