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
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

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
      const foundPost = blogPosts.find(
        (post) => post.header === location.state.selectedPost
      );
      if (foundPost) {
        setSelectedPost(foundPost);
      }
    } else if (!selectedPost && blogPosts.length > 0) {
      setSelectedPost(blogPosts[0]);
    }
  }, [location.state, blogPosts, selectedPost]);

  const handleSeeMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, blogPosts.length));
  };

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
      setShowMore(true);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  if (isLoading) {
    return null;
  }

  const getImageGridConfig = (imageCount: number): string => {
    switch (imageCount) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto";
      case 3:
        return "grid-cols-1 sm:grid-cols-3";
      default:
        return "grid-cols-1 max-w-2xl mx-auto";
    }
  };

  return (
    <div id="blog-posts-container" className="pt-[64px] lg:p-0">
      {selectedPost && (
        <div>
          <section className="flex flex-col-reverse lg:flex-row md:justify-center justify-center items-center w-screen gap-10 lg:gap-30 px-5  sm:px-10 overflow-auto my-10">
            <section className="flex flex-col lg:w-full space-y-4 mr-[30px] ml-[30px]">
              <h1>{selectedPost.header}</h1>
              {selectedPost.textBlocks &&
                selectedPost.textBlocks.map((text, i) => <p key={i}>{text}</p>)}
            </section>
            <section className="flex shrink-0   mr-[30px] ml-[30px] lg:w-1/2 items-center justify-center">
              {selectedPost.images &&
                selectedPost.images[0] &&
                selectedPost.images[0].asset && (
                  <img
                    src={selectedPost.images[0].asset.url}
                    alt={selectedPost.images[0].altText || "Main image"}
                    className="object-cover max-w-[300px] h-[300px] sm:max-w-[500px] sm:h-[500px]"
                  />
                )}
            </section>
          </section>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              showMore ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {showMore && (
              <div>
                {selectedPost.images.length > 4 ? (
                  <section className="bg-[#1D192C] sm:px-10 pb-12 pt-8 sm:py-1 space-y-10">
                    <MyCarousel images={selectedPost.images} />
                  </section>
                ) : (
                  <section className="bg-[#1D192C] px-4 sm:px-4 py-4 flex-1 ">
                    {selectedPost.images &&
                      selectedPost.images.length > 1 &&
                      selectedPost.images.length <= 4 && (
                        <div
                          className={`grid gap-16 xs:gap-8 xl:gap-14 ${getImageGridConfig(selectedPost.images.length - 1)}`}
                        >
                          {selectedPost.images.slice(1).map((img, i) =>
                            img && img.asset ? (
                              <div
                                key={i}
                                className="flex w-full overflow-hidden items-center"
                              >
                                <img
                                  className="w-full object-cover max-h-[500px] min-h-[400px]"
                                  src={img.asset.url}
                                  alt={img.altText || `Image ${i + 2}`}
                                />
                                {img.altText && (
                                  <p className="text-white text-center mt-2">
                                    {img.altText}
                                  </p>
                                )}
                              </div>
                            ) : null
                          )}
                        </div>
                      )}
                  </section>
                )}
                <section className="flex justify-center items-center px-5 py-12 xs:px-8 md:px-36 xl:px-64">
                  <div className="bg-white flex flex-col gap-4">
                    {selectedPost.textBlocks2 &&
                      selectedPost.textBlocks2.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                  </div>
                </section>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              className={`w-screen text-left px-10 py-8 text-white font-light bg-[#B22C2B] ${
                !showMore ? "" : ""
              }`}
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
              See all posts
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPosts;
