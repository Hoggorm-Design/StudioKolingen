import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import useBlogPosts from "../../hooks/useBlogPost.ts";
import {
  BlogImageKey,
  BlogImageTextKey,
  BlogPost,
} from "../../interfaces/blogposts.ts";
import MyCarousel from "./BlogCarousel.tsx";
import BlogCard from "./CompressedBlogCard.tsx";

const BlogPosts = () => {
  const location = useLocation();
  const { blogPosts } = useBlogPosts();
  const { isLoading } = useLoading();
  const [showMore, setShowMore] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(
    location.state?.selectedPost || null,
  );
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const handleSeeMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, blogPosts.length));
  };

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (location.state?.selectedPost) {
      setSelectedPost(location.state.selectedPost); // Always set the post from location.state
    } else if (!selectedPost && blogPosts.length > 0) {
      setSelectedPost(blogPosts[0]); // Default to the first post
    }
  }, [location.state, blogPosts, selectedPost]);

  const handleShowMoreClick = () => {
    if (showMore) {
      // Scroll kun til toppen når du lukker posten
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
    setShowMore((prev) => !prev); // Bytt visningstilstanden
  };

  const handleCardClick = (post: BlogPost) => {
    if (selectedPost !== post) {
      setSelectedPost(post); // Oppdater det valgte innlegget
      setShowMore(false); // Lukk det gamle innlegget
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll til toppen
      }, 50);
    }
  };

  if (isLoading) {
    return null; // The spinner is shown by LoadingContext
  }

  return (
    <div id="blog-posts-container" className="pt-[64px] lg:p-0">
      {/* BlogPost Details (only show if a post is selected) */}
      {selectedPost && (
        <div>
          <section className="flex flex-col lg:flex-row w-full gap-16 px-5 sm:px-10 py-14 justify-center">
            <section className="flex flex-col lg:w-1/2 space-y-4">
              <h1>{selectedPost.header}</h1>
              {selectedPost.text1 && <p>{selectedPost.text1}</p>}
              {selectedPost.text2 && <p>{selectedPost.text2}</p>}
              {selectedPost.text3 && <p>{selectedPost.text3}</p>}
            </section>
            <section className="lg:w-1/2">
              {selectedPost.image1 && selectedPost.image1.asset && (
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={selectedPost.image1.asset.url}
                    alt={selectedPost.imageText1 || "Image 1"}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
            </section>
          </section>

          {/* Animated content section */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              showMore ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {showMore && (
              <div>
                <section className="bg-[#1D192C] px-5 sm:px-10 py-14">
                  {/* Filter images and count them */}
                  {selectedPost &&
                    (() => {
                      const filteredImages = [2, 3, 4]
                        .map((i) => ({
                          image: selectedPost[`image${i}` as BlogImageKey],
                          text: selectedPost[
                            `imageText${i}` as BlogImageTextKey
                          ],
                        }))
                        .filter(({ image }) => image?.asset); // Remove empty images

                      const imageCount = filteredImages.length; // Count available images

                      return (
                        <div
                          className={`grid gap-16 xs:gap-8 xl:gap-14
              ${imageCount === 1 ? "grid-cols-1 place-items-center md:px-[20vw] lg:px-[30vw]" : ""}
              ${imageCount === 2 ? "grid-cols-2 place-content-center gap-8 lg:px-[10vw]" : ""}
              ${imageCount >= 3 ? "grid-cols-1 sm:grid-cols-3" : ""}`}
                        >
                          {filteredImages.map(({ image, text }, i) => (
                            <div
                              key={i}
                              className="w-full aspect-square overflow-hidden"
                            >
                              <img
                                className="w-full h-full object-cover"
                                src={image?.asset.url}
                                alt={text || `Image ${i}`}
                              />
                              <p className="text-white">{text}</p>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                </section>
                <section className="flex justify-center items-center px-5 py-12 xs:px-8 md:px-36 xl:px-64">
                  <div className="bg-white flex flex-col gap-10">
                    {selectedPost.text4 && <p>{selectedPost.text4}</p>}
                    {selectedPost.text5 && <p>{selectedPost.text5}</p>}
                    {selectedPost.text6 && <p>{selectedPost.text6}</p>}
                  </div>
                </section>
                <section className="bg-[#1D192C] sm:px-10 pb-12 pt-8 sm:py-1 space-y-10">
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-16 xs:gap-8 xl:gap-32 px-5 sm:px-0">
                    {[5, 6].map((i) => {
                      const imageKey = `image${i}` as BlogImageKey;
                      const textKey = `imageText${i}` as BlogImageTextKey;
                      if (
                        selectedPost[imageKey] &&
                        selectedPost[imageKey].asset
                      ) {
                        return (
                          <div
                            key={i}
                            className="w-full aspect-square overflow-hidden"
                          >
                            <img
                              className="w-full h-full object-cover"
                              src={selectedPost[imageKey].asset.url}
                              alt={selectedPost[textKey] || `Image ${i}`}
                            />
                            <p className="text-white">
                              {selectedPost[textKey]}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                  {/* Carousel - Passing all images to MyCarousel */}
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
                </section>
              </div>
            )}
          </div>

          {/* Button to toggle 'show more' */}
          <div className="flex justify-center">
            <button
              className="w-screen text-left px-10 py-4 text-white font-light bg-[#B22C2B]"
              onClick={handleShowMoreClick}
            >
              {showMore ? "Close post" : "See entire post"}
              <FontAwesomeIcon
                icon={showMore ? faChevronUp : faChevronDown}
                className="ml-2"
              />
            </button>
          </div>
        </div>
      )}

      {/* Blog Cards */}
      <section className="bg-[#1D192C] px-5 sm:px-10 py-14 space-y-4">
        <h3 className="pb-4 text-white">More Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:sm:grid-cols-3 gap-16 md:gap-12 xl:gap-14">
          {blogPosts
            .filter((post) => post !== selectedPost)
            .slice(0, visiblePosts)
            .map((post, index) => (
              <BlogCard
                key={post._id || index}
                post={post}
                onClick={() => handleCardClick(post)}
                isMobile={isMobile}
              />
            ))}
        </div>
        {visiblePosts < blogPosts.length && ( // Kun vis knappen hvis det er flere innlegg å laste
          <div className="flex pt-4">
            <button
              onClick={handleSeeMore}
              className="flex items-center text-white text-lg font-light gap-6 "
            >
              See more posts
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPosts;
