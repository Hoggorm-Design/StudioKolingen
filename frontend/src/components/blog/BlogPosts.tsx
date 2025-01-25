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
						<section className="flex xl:flex-row w-full min-h-screen justify-center m-5 bottom-0">
							{/* Header */}
							<section className="flex flex-col xl:w-1/2 space-y-4">
								<h1>{post.header}</h1>

								{/* First visible part (always visible) */}
								{post.text1 && <p>{post.text1}</p>}
								{post.text2 && <p>{post.text2}</p>}
								{post.text3 && <p>{post.text3}</p>}
							</section>
							{/* Image 1 (always visible) */}
							{post.image1 && post.image1.asset && (
								<section className="xl:w-1/2">
									<img
										src={post.image1.asset.url}
										alt={post.imageText1 || "Image 1"}
									/>
									<p>{post.imageText1}</p>
								</section>
							)}{" "}
						</section>

						{/* Button to toggle 'show more' */}
						<button
							onClick={handleShowMoreClick}
							className="bg-[#B22C2B] w-screen flex items-start p-7 text-white"
						>
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
