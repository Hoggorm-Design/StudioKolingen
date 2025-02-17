import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../context/LoadingContext";
import useBlogPosts from "../../hooks/useBlogPost";
import { BlogPost } from "../../interfaces/blogposts";
import MyCarousel from "./BlogCarousel";
import BlogCard from "./CompressedBlogCard";

const BlogPosts = () => {
  const location = useLocation();
  const { blogPosts } = useBlogPosts();
  const { isLoading } = useLoading();
  const [showMore, setShowMore] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(
    location.state?.selectedPost || null
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
      setSelectedPost(location.state.selectedPost);
    } else if (!selectedPost && blogPosts.length > 0) {
      setSelectedPost(blogPosts[0]);
    }
  }, [location.state, blogPosts, selectedPost]);

  const handleShowMoreClick = () => {
    if (showMore) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
    setShowMore((prev) => !prev);
  };

  const handleCardClick = (post: BlogPost) => {
    if (selectedPost !== post) {
      setSelectedPost(post);
      setShowMore(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <div id="blog-posts-container" className="pt-[64px] lg:p-0">
      {selectedPost && (
        <div>
          {/* Blog Post Details */}
          <section className="flex flex-col lg:flex-row w-full gap-16 px-5 sm:px-10 py-14 justify-center">
            <section className="flex flex-col lg:w-1/2 space-y-4">
              <h1>{selectedPost.header}</h1>
              {selectedPost.textBlocks &&
                selectedPost.textBlocks.map((text, i) => <p key={i}>{text}</p>)}
            </section>
            <section className="lg:w-1/2">
              {selectedPost.regularImages &&
                selectedPost.regularImages[0] &&
                selectedPost.regularImages[0].asset && (
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={selectedPost.regularImages[0].asset.url}
                      alt={
                        selectedPost.regularImages[0].altText || "Main image"
                      }
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
            </section>
          </section>

          {/* Animated Content Section */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              showMore ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {showMore && (
              <div>
                <section className="bg-[#1D192C] px-5 sm:px-10 py-14">
                  {/* Show additional regular images, if any */}
                  {selectedPost.regularImages &&
                    selectedPost.regularImages.length > 1 && (
                      <div
                        className={`grid gap-16 xs:gap-8 xl:gap-14 ${
                          selectedPost.regularImages.length === 2
                            ? "grid-cols-2 place-content-center lg:px-[10vw]"
                            : selectedPost.regularImages.length >= 3
                              ? "grid-cols-1 sm:grid-cols-3"
                              : "grid-cols-1 place-items-center md:px-[20vw] lg:px-[30vw]"
                        }`}
                      >
                        {selectedPost.regularImages.slice(1).map((img, i) =>
                          img && img.asset ? (
                            <div
                              key={i}
                              className="w-full aspect-square overflow-hidden"
                            >
                              <img
                                className="w-full h-full object-cover"
                                src={img.asset.url}
                                alt={img.altText || `Image ${i + 2}`}
                              />
                              {img.altText && (
                                <p className="text-white">{img.altText}</p>
                              )}
                            </div>
                          ) : null
                        )}
                      </div>
                    )}
                </section>

                <section className="flex justify-center items-center px-5 py-12 xs:px-8 md:px-36 xl:px-64">
                  <div className="bg-white flex flex-col gap-10">
                    {/* If you need additional text content, you could use more textBlocks */}
                  </div>
                </section>

                <section className="bg-[#1D192C] sm:px-10 pb-12 pt-8 sm:py-1 space-y-10">
                  {/* Carousel Section */}
                  {selectedPost.carouselImages &&
                    selectedPost.carouselImages.length > 0 && (
                      <MyCarousel images={selectedPost.carouselImages} />
                    )}
                </section>
              </div>
            )}
          </div>

          {/* Toggle Show More Button */}
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

      {/* Blog Cards List */}
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
        {visiblePosts < blogPosts.length && (
          <div className="flex pt-4">
            <button
              onClick={handleSeeMore}
              className="flex items-center text-white text-lg font-light gap-6"
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
