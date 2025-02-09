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
              <article className="bg-[#1a1a2e] sm:px-10 py-14">
                <h2 className="text-[#FFFFFF]">{selectedPost.header}</h2>
                {/* Carousel Section */}
                <div className="bg-white flex flex-col gap-10">
                  <div className="bg-white flex flex-col gap-10">
                    {/* Displaying Only the First Text Block */}
                    {selectedPost.firstTextfield
                      ?.slice(0, 2)
                      .map((block, index) => <p key={index}>{block}</p>)}
                  </div>
                  {/* Displaying Text Blocks with Links */}
                  {selectedPost.links?.map((block, index) => (
                    <p key={index}>
                      <a
                        href={block.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {block.name}
                      </a>
                    </p>
                  ))}
                  {selectedPost.regularImages
                    ?.slice(0, 1)
                    .map((image, index) => (
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
                  <div className="bg-white flex flex-col gap-10">
                    {/* Displaying All Text Blocks Except the First One */}
                    {selectedPost.firstTextfield
                      ?.slice(2)
                      .map((block, index) => <p key={index}>{block}</p>)}
                  </div>
                </div>
                <article className="grid grid-cols-1 sm:grid-cols-3 gap-16 px-5 sm:px-0">
                  {selectedPost.regularImages
                    ?.slice(1, 4)
                    .map((image, index) => (
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
            <article className="bg-[#1a1a2e] px-5 sm:px-10 py-16">
              {/* Carousel Component */}
              <MyCarousel
                images={selectedPost.carouselImages?.filter(
                  (image) => image?.asset,
                )}
              />

              {/* More Posts Section */}
              <section className="bg-[#1D192C] pt-14 space-y-4">
                <h3 className="pb-4 text-[#fffdf8]">More Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:sm:grid-cols-3 gap-16 md:gap-12 xl:gap-14">
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
