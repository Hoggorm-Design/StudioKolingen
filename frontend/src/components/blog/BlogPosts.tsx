import { useState, useEffect } from "react";
import useBlogPosts from "../../hooks/useBlogPost.ts";
import MyCarousel from "./BlogCarousel.tsx";
import BlogCard from "./CompressedBlogCard.tsx";

const BlogPosts = () => {
  const { blogPosts, loading } = useBlogPosts();
  const [showMore, setShowMore] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any | null>(null); // State to track the selected blog post

  useEffect(() => {
    if (blogPosts.length > 0) {
      // Set the initial selected post to the first post if available
      setSelectedPost(blogPosts[0]);
    }
  }, [blogPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleShowMoreClick = () => {
    setShowMore((prev) => !prev);
  };

  const handleCardClick = (post: any) => {
    setSelectedPost(post);
  };

  return (
    <div>
      {/* BlogPost Details (only show if a post is selected) */}
      {selectedPost && (
        <div>
          <section className="flex flex-col xl:flex-row w-full min-h-screen gap-20 pt-16 p-10 justify-center">
            <section className="flex flex-col xl:w-1/2 space-y-4">
              <h1>{selectedPost.header}</h1>
              {selectedPost.text1 && <p>{selectedPost.text1}</p>}
              {selectedPost.text2 && <p>{selectedPost.text2}</p>}
              {selectedPost.text3 && <p>{selectedPost.text3}</p>}
            </section>
            <section className="xl:w-1/2">
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

          {/* Button to toggle 'show more' */}
          <button
            className="w-screen text-left px-10 py-5 text-white font-light bg-[#B22C2B]"
            onClick={handleShowMoreClick}
          >
            {showMore ? "Close post" : "See entire post"}
          </button>

          {/* Show additional content if 'showMore' is true */}
          {showMore && (
            <div>
              <section className="bg-[#1D192C] px-10 py-32">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:sm:grid-cols-3 gap-16 xs:gap-8 xl:gap-14">
                  {[2, 3, 4].map((i) => {
                    const imageKey = `image${i}`;
                    const textKey = `imageText${i}`;
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
                          <p className="text-white">{selectedPost[textKey]}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </section>
              <section className="flex justify-center items-center py-5 xs:py-10 md:py-32 px-3 xs:px-8 md:px-36 xl:px-64">
                <div className="bg-white flex flex-col gap-10">
                  {selectedPost.text4 && <p>{selectedPost.text4}</p>}
                  {selectedPost.text5 && <p>{selectedPost.text5}</p>}
                  {selectedPost.text6 && <p>{selectedPost.text6}</p>}
                </div>
              </section>
              <section className="bg-[#1D192C] px-10 py-32">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-16 xs:gap-8 xl:gap-14"></div>
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
              {/* Render Link if exists */}
              {selectedPost.link && (
                <a
                  href={selectedPost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Blog Cards */}
      <section className="bg-[#1D192C] p-10 sm:py-20">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:sm:grid-cols-3 gap-16 xs:gap-8 xl:gap-14">
          {blogPosts.map((post) => (
            <BlogCard
              key={post._id}
              post={post}
              onClick={() => handleCardClick(post)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPosts;
