import { useState } from "react";
import useBlogPosts from "../../hooks/useBlogPost.ts";
import MyCarousel from "./BlogCarousel.tsx";

const BlogPosts = () => {
  const { blogPosts, loading } = useBlogPosts();
  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleShowMoreClick = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div>
      {blogPosts.map((post) => {
        const images = [
          post.image1,
          post.image2,
          post.image3,
          post.image4,
          post.image5,
          post.image6,
          post.image7,
          post.image8,
          post.image9,
          post.image10,
        ].filter((image) => image && image.asset); // Filter out undefined or null images

        return (
          <div key={post._id}>
            {/* Header */}
            <h1>{post.header}</h1>

            {/* First visible part (always visible) */}
            {post.text1 && <p>{post.text1}</p>}
            {post.text2 && <p>{post.text2}</p>}
            {post.text3 && <p>{post.text3}</p>}

            {/* Image 1 (always visible) */}
            {post.image1 && post.image1.asset && (
              <div>
                <img
                  src={post.image1.asset.url}
                  alt={post.imageText1 || "Image 1"}
                />
                <p>{post.imageText1}</p>
              </div>
            )}

            {/* Button to toggle 'show more' */}
            <button onClick={handleShowMoreClick}>
              {showMore ? "Show Less" : "Show More"}
            </button>

            {/* Show additional content if 'showMore' is true */}
            {showMore && (
              <div>
                {/* Images 2-6 */}
                {post.image2 && post.image2.asset && (
                  <div>
                    <img
                      src={post.image2.asset.url}
                      alt={post.imageText2 || "Image 2"}
                    />
                    <p>{post.imageText2}</p>
                  </div>
                )}
                {post.image3 && post.image3.asset && (
                  <div>
                    <img
                      src={post.image3.asset.url}
                      alt={post.imageText3 || "Image 3"}
                    />
                    <p>{post.imageText3}</p>
                  </div>
                )}
                {post.image4 && post.image4.asset && (
                  <div>
                    <img
                      src={post.image4.asset.url}
                      alt={post.imageText4 || "Image 4"}
                    />
                    <p>{post.imageText4}</p>
                  </div>
                )}
                {post.text4 && <p>{post.text4}</p>}
                {post.text5 && <p>{post.text5}</p>}
                {post.text6 && <p>{post.text6}</p>}
                {post.image5 && post.image5.asset && (
                  <div>
                    <img
                      src={post.image5.asset.url}
                      alt={post.imageText5 || "Image 5"}
                    />
                    <p>{post.imageText5}</p>
                  </div>
                )}
                {post.image6 && post.image6.asset && (
                  <div>
                    <img
                      src={post.image6.asset.url}
                      alt={post.imageText6 || "Image 6"}
                    />
                    <p>{post.imageText6}</p>
                  </div>
                )}
                {/* Carousel - Passing all images to MyCarousel */}
                <MyCarousel images={images} />
                {/* Render Link if exists */}
                {post.link && (
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
