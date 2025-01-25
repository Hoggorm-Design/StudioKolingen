import useBlogPosts from "../../hooks/useBlogPost.ts";

const BlogPosts = () => {
  const { blogPosts, loading } = useBlogPosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(blogPosts);

  return (
    <div>
      {blogPosts.map((post) => (
        <div key={post._id}>
          <h1>{post.header}</h1>

          {/* Render Text Fields */}
          {post.text1 && <p>{post.text1}</p>}
          {post.text2 && <p>{post.text2}</p>}
          {post.text3 && <p>{post.text3}</p>}
          {post.text4 && <p>{post.text4}</p>}
          {post.text5 && <p>{post.text5}</p>}
          {post.text6 && <p>{post.text6}</p>}

          {/* Render Image Fields */}
          {post.image1 && post.image1.asset && (
            <div>
              <img
                src={post.image1.asset.url}
                alt={post.imageText1 || "Image 1"}
              />
              <p>{post.imageText1}</p>
            </div>
          )}
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
          {post.image7 && post.image7.asset && (
            <div>
              <img
                src={post.image7.asset.url}
                alt={post.imageText7 || "Image 7"}
              />
              <p>{post.imageText7}</p>
            </div>
          )}
          {post.image8 && post.image8.asset && (
            <div>
              <img
                src={post.image8.asset.url}
                alt={post.imageText8 || "Image 8"}
              />
              <p>{post.imageText8}</p>
            </div>
          )}
          {post.image9 && post.image9.asset && (
            <div>
              <img
                src={post.image9.asset.url}
                alt={post.imageText9 || "Image 9"}
              />
              <p>{post.imageText9}</p>
            </div>
          )}
          {post.image10 && post.image10.asset && (
            <div>
              <img
                src={post.image10.asset.url}
                alt={post.imageText10 || "Image 10"}
              />
              <p>{post.imageText10}</p>
            </div>
          )}

          {/* Render Link if exists */}
          {post.link && (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
