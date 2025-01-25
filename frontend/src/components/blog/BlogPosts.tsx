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

  // Handle the click on a BlogCard to update the selected post
  const handleCardClick = (post: any) => {
    setSelectedPost(post);
  };

  return (
    <div>
      {/* BlogPost Details (only show if a post is selected) */}
      {selectedPost && (
        <div>
          {/* Header */}
          <h1>{selectedPost.header}</h1>

          {/* First visible part (always visible) */}
          {selectedPost.text1 && <p>{selectedPost.text1}</p>}
          {selectedPost.text2 && <p>{selectedPost.text2}</p>}
          {selectedPost.text3 && <p>{selectedPost.text3}</p>}

          {/* Image 1 (always visible) */}
          {selectedPost.image1 && selectedPost.image1.asset && (
            <div>
              <img
                src={selectedPost.image1.asset.url}
                alt={selectedPost.imageText1 || "Image 1"}
              />
              <p>{selectedPost.imageText1}</p>
            </div>
          )}

          {/* Button to toggle 'show more' */}
          <button onClick={handleShowMoreClick}>
            {showMore ? "Show Less" : "Show More"}
          </button>

          {/* Show additional content if 'showMore' is true */}
          {showMore && (
            <div>
              {/* Images 2-10 */}
              {[...Array(10).keys()].map((i) => {
                const imageKey = `image${i + 1}`;
                const textKey = `imageText${i + 1}`;
                if (selectedPost[imageKey] && selectedPost[imageKey].asset) {
                  return (
                    <div key={i}>
                      <img
                        src={selectedPost[imageKey].asset.url}
                        alt={selectedPost[textKey] || `Image ${i + 1}`}
                      />
                      <p>{selectedPost[textKey]}</p>
                    </div>
                  );
                }
                return null;
              })}

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {blogPosts.map((post) => (
          <BlogCard
            key={post._id}
            post={post}
            onClick={() => handleCardClick(post)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
